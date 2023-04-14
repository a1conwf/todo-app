import React from "react";
import ThemeContext from "../../ThemeContext";

import styles from "./Header.module.scss";

import iconSun from "../../assets/svg/icon-sun.svg";
import iconMoon from "../../assets/svg/icon-moon.svg";

const Header = () => {
  const { themeDark, setThemeDark } = React.useContext(ThemeContext);
  const themeIcon = themeDark ? iconSun : iconMoon;

  return (
    <header className={`${styles.header} ${!themeDark && styles.light}`}>
      <div className={styles.inner}>
        <h1>Todo</h1>
        <img
          src={themeIcon}
          alt="theme-icon"
          onClick={() => setThemeDark(!themeDark)}
        />
      </div>
    </header>
  );
};

export default Header;
