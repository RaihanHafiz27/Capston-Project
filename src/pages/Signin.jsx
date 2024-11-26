import { NavbarTitle } from "../components/fragments/Navbar/NavbarTitle";

export const LoginPage = () => {
  return (
    <div className="flex flex-col w-full h-full border-2 border-pink-500">
      <div className="p-4">
        <NavbarTitle />
      </div>
      <div className="flex items-center justify-center flex-1 border-2 border-black">
        <div className="w-4/5 border-2 border-white">
          <div className="w-1/3 bg-white">test</div>
        </div>
      </div>
    </div>
  );
};
