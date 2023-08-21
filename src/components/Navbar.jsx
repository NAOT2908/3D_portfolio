import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BiSun } from "react-icons/bi";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Theme from "./Theme";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex gap-2 items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Toàn &nbsp; <span className="sm:block hidden">| Web Developer</span>
          </p>
        </Link>

        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`group ${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium relative`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <div className="absolute w-full h-[3px] left-0 top-full transform scale-x-0 transition-transform duration-500 bg-white group-hover:scale-x-100 origin-left group-hover:origin-left"></div>
            </li>
          ))}
          <Theme />
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" cursor-pointer object-contain w-[28px] h-[28px]"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z10 rounded-xl`}
          >
            <ul className="list-none flex justify-end flex-col items-start gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`group ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white font-poppins text-[16px] cursor-pointer font-medium relative transition duration-500`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                  <div className="absolute w-full h-[3px] left-0 top-full transform scale-x-0 transition-transform duration-500 bg-white group-hover:scale-x-100 origin-left group-hover:origin-left"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
