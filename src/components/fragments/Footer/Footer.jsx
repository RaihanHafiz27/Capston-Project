import { Link } from "react-router-dom";
import Linkedin from "../../elements/icons/Linkedin";
import Github from "../../elements/icons/Github";
import Instagram from "../../elements/icons/Instagram";

const dataContact = [
  {
    id: 1,
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/m-raihan-hafiz-91a368186/",
  },
  {
    id: 2,
    icon: <Github />,
    link: "https://github.com/RaihanHafiz27",
  },
  {
    id: 3,
    icon: <Instagram />,
    link: "#",
  },
];

const productLinks = [
  {
    id: 1,
    title: "returns",
    to: "#",
  },
  {
    id: 2,
    title: "tracking",
    to: "#",
  },
  {
    id: 3,
    title: "history",
    to: "#",
  },
  {
    id: 4,
    title: "wishlist",
    to: "#",
  },
];

const information = [
  {
    id: 1,
    title: "faq",
    to: "#",
  },
  {
    id: 2,
    title: "help",
    to: "#",
  },
  {
    id: 3,
    title: "blog",
    to: "#",
  },
  {
    id: 4,
    title: "support",
    to: "#",
  },
];

const company = [
  {
    id: 1,
    title: "about us",
    to: "#",
  },
  {
    id: 2,
    title: "careers",
    to: "#",
  },
  {
    id: 3,
    title: "contact us",
    to: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full pt-10 pb-2 bg-rose-700 dark:bg-transparent 2xl:w-3/5">
      <div className="flex w-4/5 ">
        <div className="grid w-3/5 grid-cols-3 gap-2 text-slate-200 ">
          <div className="tracking-wider ">
            <h6 className="font-semibold font-Poppins">Product</h6>
            <ul className="my-2 space-y-1">
              {productLinks.map((item) => (
                <li key={item.id}>
                  <Link className="text-gray-500 capitalize hover:text-slate-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="tracking-wider ">
            <h6 className="font-semibold font-Poppins">Information</h6>
            <ul className="my-2 space-y-1">
              {information.map((item) => (
                <li key={item.id}>
                  <Link className="text-gray-500 capitalize hover:text-slate-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="tracking-wider ">
            <h6 className="font-semibold font-Poppins">Company</h6>
            <ul className="my-2 space-y-1">
              {company.map((item) => (
                <li key={item.id}>
                  <Link className="text-gray-500 capitalize hover:text-slate-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-2/5">
          <p className="text-justify text-slate-200 2xl:text-base">
            Luxura is a premium e-commerce that brings high-quality fashion,
            accessories, and electronic products for those who prioritize style
            and luxury. Enjoy an exclusive shopping experience with easy
            navigation, secure payment, and special promos. Find elegance in
            every detail only at Luxura!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-4/5 ">
        <hr className="w-full h-[1px] bg-gray-200 border-0 rounded dark:bg-gray-400 my-4"></hr>
        <div className="flex items-center justify-between w-full">
          <img src="/images/luxura-logo.png" alt="" className="h-auto w-52" />
          <ul className="flex space-x-8 capitalize text-slate-200">
            <li>term</li>
            <li>privacy</li>
            <li>cookies</li>
          </ul>
          <ul className="flex items-center justify-center space-x-4">
            {dataContact.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 p-2 transition-transform duration-300 ease-in-out border rounded-full hover:scale-110 text-slate-200"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
