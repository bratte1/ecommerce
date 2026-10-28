import { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import ProductContext from "../context/ProductProvider";

function Navbar() {
  const [showmenu, setShowmenu] = useState(false);
  const {cartCount} = useContext(ProductContext)
  const navs = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Men",
      path: "/men",
    },
    {
      name: "Women",
      path: "/women",
    },
    {
      name: "Kids",
      path: "/kids",
    },
  ];
  return (
    <div className="sticky top-0 left-0 z-50">
      {/* big */}
      <div className="hidden lg:block">
        <div className=" h-28 flexRow justify-between p-4 bg-black">
          <Link
            to={"/"}
            className="logo h-14 w-14 rounded-full bg-white text-black flexRow justify-center"
          >
            Smart
          </Link>

          <div className="list  flexRow gap-8">
            {navs.map((item, i) => (
              <NavLink
                className={({ isActive }) =>
                  ` p-2 font-semibold border-2  transition ease-in-out duration-200 border-white rounded-full hover:bg-white hover:text-black ${isActive ? " bg-white  text-black" : "text-white"}`
                }
                key={i}
                to={item.path}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="icons flexRow gap-5">
            <span className="icon">
              <FaUser />
            </span>
            <Link to={"/checkout"} className="icon relative">
              <FaCartShopping />
              <span className="absolute top-[-20px] right-[-10px]">{cartCount}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* small */}
      <div className="lg:hidden flexRow justify-between bg-black p-2 relative">
        <Link
          to={"/"}
          className="logo h-12 w-12 rounded-full bg-white text-black flexRow justify-center p-2"
        >
          Smart
        </Link>
        <div className="flex justify-between items-center gap-6">
          <Link to={"/checkout"} className="icon relative text-white">
            <FaCartShopping />
            <span className="absolute top-[-20px] right-[-10px]">{cartCount}</span>
          </Link>
          <span
            onClick={() => setShowmenu((prv) => !prv)}
            className="icons block lg:hidden  "
          >
            <MdMenu className="h-10 w-10" />
          </span>
        </div>

        <div
          className={` ${showmenu ? "" : "hidden"}  list flex  flex-col gap-4 bg-black absolute top-[100%] left-0 w-full z-50 px-2 py-4`}
        >
          {navs.map((item, i) => (
            <NavLink
              className={({ isActive }) =>
                ` p-2 font-semibold border-2  transition ease-in-out duration-200 border-white rounded-full hover:bg-white hover:text-black ${isActive ? " bg-white  text-black" : "text-white"}`
              }
              key={i}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;