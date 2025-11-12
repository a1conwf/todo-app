import React from "react";
import { useTheme } from "../hooks/useTheme";

import moonIcon from "../assets/svg/icon-moon.svg";
import sunIcon from "../assets/svg/icon-sun.svg";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? moonIcon : sunIcon;

  return (
    <header className="header min-h-[200px] md:min-h-[300px]">
      <div className="container mx-auto px-6 pt-12 pb-10 max-w-[541px] md:pt-17 md:px-0">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl text-white uppercase font-bold">
            Todo
          </h1>
          <button
            onClick={toggleTheme}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src={themeIcon}
              alt={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
