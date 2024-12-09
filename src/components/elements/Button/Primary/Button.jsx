export const Button = (props) => {
  const {
    children = "...",
    type = "button",
    onClick = () => {},
    classname = "w-full text-white lg:py-2",
  } = props;
  return (
    <button
      className={`py-1 my-2 font-Poppins  bg-rose-600 hover:bg-rose-800  ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
