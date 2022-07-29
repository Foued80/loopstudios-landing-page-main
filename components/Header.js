import React from "react";
import styles from "../styles/Header.module.css";
import logo from "../assets/logo.svg";
import close from "../assets/icon-close.svg";
import hamburger from "../assets/icon-hamburger.svg";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" layout="fill" priority />
      </div>

      <input
        className={styles.input}
        type="checkbox"
        name="nav-toggle"
        id="nav-toggle"
      />

      <div className={styles.hamburger}>
        <label htmlFor="nav-toggle">
          <Image src={hamburger} alt="menu icon" />
        </label>
      </div>

      <nav className={styles.nav}>
        <div className={styles.nav_close_wrapper}>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" layout="fill" priority />
          </div>

          <div className={styles.close}>
            <label htmlFor="nav-toggle">
              <Image src={close} alt="close icon" />
            </label>
          </div>
        </div>

        <a href="#" className={styles.nav_link}>
          about
        </a>
        <a href="#" className={styles.nav_link}>
          careers
        </a>
        <a href="#" className={styles.nav_link}>
          events
        </a>
        <a href="#" className={styles.nav_link}>
          products
        </a>
        <a href="#" className={styles.nav_link}>
          support
        </a>
      </nav>
    </header>
  );
}

export default Header;
