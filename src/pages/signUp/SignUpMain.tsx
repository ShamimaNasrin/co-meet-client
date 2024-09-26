import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";
const SignUpMain = () => {
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Sign Up");
  return <div>Sign Up</div>;
};

export default SignUpMain;
