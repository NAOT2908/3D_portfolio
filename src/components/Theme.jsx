import { useEffect, useState } from "react";
import { BiSolidSun } from "react-icons/bi";
import { PiMoonStarsFill } from "react-icons/pi";

const Theme = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [colorSun, setColorSun] = useState("black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
        setColorSun("black")
      } else {
        setScrolled(false);
        setColorSun("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleTheme = () => {
    setToggle(!toggle);
    document.documentElement.classList.toggle("light-theme", !toggle);

  };

  return (
    <div className=" cursor-pointer" onClick={toggleTheme}>
      {toggle ? <BiSolidSun size={20} color={colorSun} /> : <PiMoonStarsFill size={20} />}
    </div>
  );
};

export default Theme;
