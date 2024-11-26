import { FacebookIcon } from "../elements/icons/Facebook";
import { GoogleIcon } from "../elements/icons/GoogleIcon";

export const SignInWith = () => {
  return (
    <div className="flex items-center justify-center mb-2 md:mb-4">
      <a href="" className="mx-2">
        <GoogleIcon />
      </a>
      <a href="" className="mx-2">
        <FacebookIcon />
      </a>
    </div>
  );
};
