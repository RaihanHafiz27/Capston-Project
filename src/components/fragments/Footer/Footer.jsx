import { NavbarTitle } from "../Navbar/NavbarTitle";

const dataContact = [
  {
    id: 1,
    icon: "/images/footer-icons/linkedin.png",
    link: "/",
  },
  {
    id: 2,
    icon: "/images/footer-icons/github.png",
    link: "/",
  },
  {
    id: 3,
    icon: "/images/footer-icons/tiktok.png",
    link: "/",
  },
  {
    id: 4,
    icon: "/images/footer-icons/facebook.png",
    link: "/",
  },
  {
    id: 5,
    icon: "/images/footer-icons/instagram.png",
    link: "/",
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center pt-10 border-2 border-orange-500 bg-amber-900 lg:w-4/5 2xl:w-3/5">
      <div className="flex w-11/12 border border-pink-600">
        <div className="w-1/2 border ">
          <NavbarTitle classname={"text-slate-200"} />
          <p className="mt-4 text-sm text-justify 2xl:text-base text-slate-200">
            Luxura is a premium e-commerce that brings high-quality fashion,
            accessories, and electronic products for those who prioritize style
            and luxury. Enjoy an exclusive shopping experience with easy
            navigation, secure payment, and special promos. Find elegance in
            every detail only at Luxura!
          </p>
        </div>
        <div className="flex flex-col items-center w-1/2 ml-2 border border-black justify-evenly">
          <h2 className="text-base font-semibold tracking-wider text-center uppercase font-Poppins lg:text-lg 2xl:text-xl text-slate-200">
            Contact me on social media
          </h2>
          <ul className="flex items-center justify-center space-x-6">
            {dataContact.map((item) => (
              <li key={item.id}>
                <a href={item.link} target="_blank" className="">
                  <img
                    src={item.icon}
                    alt="contact"
                    className="w-12 h-12 transition duration-500 2xl:w-16 2xl:h-16 hover:-translate-x-2 hover:-translate-y-2"
                  />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs lg:text-sm text-slate-200 font-Poppins">
            Data provided by{" "}
            <a
              href="https://fakestoreapi.com/"
              target="_blank"
              className="font-semibold text-amber-500"
            >
              Fake Store API
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-11/12 mt-4 mb-2 border border-black">
        <hr className="w-full h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400 my-2"></hr>
        <p className="text-slate-200">
          © 2024 Luxura. All Rights Reserved. Designed and Managed by
          <a
            href="https://www.linkedin.com/in/m-raihan-hafiz-91a368186/"
            target="_blank"
            className="ml-2 font-medium text-amber-600"
          >
            M Raihan Hafiz
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};
