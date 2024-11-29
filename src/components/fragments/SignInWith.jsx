import { FacebookIcon } from "../elements/icons/Facebook";
import { GoogleIcon } from "../elements/icons/GoogleIcon";

export const SignInWith = () => {
  return (
    <div className="flex items-center justify-center mb-2 space-x-4 md:mb-4">
      <a href="">
        <GoogleIcon />
      </a>
      <a href="">
        <FacebookIcon />
      </a>
    </div>
  );
};
