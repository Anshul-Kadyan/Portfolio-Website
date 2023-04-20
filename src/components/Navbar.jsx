import { useState } from "react";
import { Link } from "react-scroll";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { NavLinks } from "../constant/index";
import NavPhoto from "../assets/AppFiles/NavPhoto.svg";

export default function Navbar() {
  const [toggle, settoggle] = useState(false);
  toggle
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <>
      <div className="md:hidden h-3 bg-slate-300"></div>
      <div
        className={`flex justify-between items-center md:px-48 px-4  md:py-8 py-2 font-poppins `}>
        {/* Humburger Menu Code */}

        <div
          onClick={() => settoggle((prev) => !prev)}
          className="md:hidden flex-none  ">
          <MenuRoundedIcon />
        </div>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          }  absolute  w-full  top-0 left-0 h-screen bg-transparet backdrop-blur-sm
          slide-in-left overflow-y-auto`}>
          <div className=" flex flex-col pl-4 pt-5 w-2/3 justify-between bg-white shadow-xl shadow-black">
            <div className="flex flex-col   gap-8 ">
              <div onClick={() => settoggle((prev) => !prev)}>
                <CloseRoundedIcon className=" bg-slate-300 rounded-full" />
              </div>
              <ul>
                {NavLinks.map((menu_item) => {
                  return (
                    <li key={menu_item.id} className="py-5 ">
                      <Link
                        to={`${menu_item.id}`}
                        smooth={true}
                        offset={25}
                        duration={500}
                        onClick={() => settoggle((prev) => !prev)}
                        className="text-lg font-semibold ">
                        {menu_item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <img src={NavPhoto} alt="Illustration" className="" />
          </div>
        </div>

        {/* Website Menu Code */}
        <ul className="hidden md:flex font-semibold cursor-pointer flex-1 text-base">
          {NavLinks.map((menu_item, index) => {
            return (
              <li
                key={menu_item.id}
                className={`${
                  index === NavLinks.length - 1 ? "mr-0" : "mr-10"
                } inline-block hover:transform hover:scale-110 transition-all`}>
                <Link
                  to={`${menu_item.id}`}
                  smooth={true}
                  offset={25}
                  duration={500}
                  className="text-lg font-semibold ">
                  {menu_item.title[0]}
                  <span className="hover:underline underline-offset-2 ">
                    {menu_item.title.slice(1)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="md:px-2 px-1.5 py-1 pb-1.5 rounded-full ease-in-out delay-150 bg-slate-200 md:hover:-translate-y-1 md:hover:scale-110 hover:bg-slate-300 duration-300 ">
          <Link
            to="contact"
            smooth={true}
            offset={25}
            duration={500}
            className=" md:font-semibold font-normal text-sm">
            Let's Talk
          </Link>
        </button>
      </div>
      <div className="md:hidden h-3 bg-slate-300"></div>
    </>
  );
}
