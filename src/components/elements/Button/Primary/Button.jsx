export const Button = (props) => {
  const {
    children = "...",
    type = "button",
    onClick = () => {},
    classname = "w-full text-white lg:py-2",
  } = props;
  return (
    <button
      className={`py-1 my-2 font-Roboto   bg-amber-500 hover:bg-amber-600  ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
