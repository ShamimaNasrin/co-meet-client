import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";

const LoginMain = () => {
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Login");
  return <div>Login</div>;
};

export default LoginMain;
