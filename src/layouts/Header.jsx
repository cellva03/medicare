import Logo from "../assets/logo.png";
import { SunIcon, MoonIcon } from "../components/icons";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      return "dark";
    } else {
      document.documentElement.classList.remove("dark");
      return "light";
    }
  });

  const handleClick = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    if (localStorage.theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div className="w-full p-4 bg-primary flex justify-between">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-[40px] h-auto" />
        <h2 className="text-xl font-bold">
          <span className="text-white">Medi</span>Care
        </h2>
      </div>
      <button className="text-white" onClick={handleClick}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default Header;
