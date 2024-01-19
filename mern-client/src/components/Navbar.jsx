import Logo from "../assets/only-logo.png";
import { BiSolidBookAdd } from "react-icons/bi";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Books",
    link: "/books",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="font-proza shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-0">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <a href="/" className="font-bold text-lg sm:text-2xl lg:text-3xl flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-8 sm:w-10" />
                BookMark
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 sm:mt-0">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block font-bold py-2 px-3 sm:py-4 sm:px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <Link to="/crudbooks">
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-3 sm:py-2 sm:px-4 rounded-full flex items-center gap-2 sm:gap-3"
                >
                  Manage Books
                  <BiSolidBookAdd className="text-lg sm:text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Navbar;
