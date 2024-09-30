import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { tokenVerify } from "../../utils/tokenVerify";

interface TFormInput {
  email: string;
  password: string;
}

const LoginMain: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>();

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    const toastId = toast.loading("Logging in");
    // console.log(data);
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      // console.log("res:", res);

      const user = tokenVerify(res.data.accessToken) as TUser;
      console.log("user :", user);
      dispatch(setUser({ user: res.data.user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Login");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg px-10 py-6 space-y-6 xl:w-[33%] lg:w-[33%] md:w-[60%] sm:w-[80%] w-[90%]"
      >
        <h2 className="text-2xl font-semibold text-center text-indigo-600">
          Login
        </h2>

        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:bg-indigo-700"
          >
            Login
          </button>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="text-indigo-600 hover:text-indigo-800 text-sm"
          >
            Forgot Password?
          </button>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account yet?
            <a
              href="/signup"
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              {" "}
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginMain;
