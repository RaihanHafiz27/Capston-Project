import { Link } from "react-router-dom";
import { CartIcon } from "../icons/CartIcon";
import { useSelector } from "react-redux";

export const Cart = (props) => {
  const { textColor } = props;
  const cartItem = useSelector((state) => state.dataProducts.cartItem);

  return (
    <Link
      to={"/cart"}
      className={`relative flex items-center text-sm font-Roboto font-semibold leading-snug tracking-widest uppercase  2xl:text-base space-x-1 ${textColor}`}
    >
      <CartIcon />
      {cartItem.length > 0 && (
        <span className="absolute px-1 text-xs bg-white rounded-full text-rose-600 -left-2 -top-1">
          {cartItem.length}
        </span>
      )}
    </Link>
  );
};
