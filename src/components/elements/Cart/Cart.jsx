import { Link } from "react-router-dom";
import { CartIcon } from "../icons/CartIcon";

export const Cart = (props) => {
  const { textColor } = props;
  return (
    <Link
      to={"/"}
      className={`relative flex items-center text-sm font-Roboto font-semibold leading-snug tracking-widest uppercase  2xl:text-base space-x-1 ${textColor}`}
    >
      <CartIcon />
      <span className="absolute px-1 text-xs text-white bg-red-500 rounded-full -left-2 -top-1">
        1
      </span>
    </Link>
  );
};
