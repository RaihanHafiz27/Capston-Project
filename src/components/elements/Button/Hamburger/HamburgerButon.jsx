export const HamburgerBtn = ({ onClick, isOpen }) => {
  return (
    <button className="relative w-10 h-10 text-slate-200" onClick={onClick}>
      <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-5 bg-current block transform transition duration-500 ease-in-out ${
            isOpen ? "rotate-45" : "-translate-y-2"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-5 bg-current block transform transition duration-500 ease-in-out ${
            isOpen ? "opacity-0" : "translate-y-0"
          } `}
        ></span>
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-5 bg-current block transform transition duration-500 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-2"
          }`}
        ></span>
      </div>
    </button>
  );
};
