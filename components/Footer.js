import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import logo from "../assets/logo.svg";
import fb from "../assets/icon-facebook.svg";
import tw from "../assets/icon-twitter.svg";
import pi from "../assets/icon-pinterest.svg";
import ins from "../assets/icon-instagram.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={146} height={27} />
        </div>
        <nav className={styles.nav}>
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
        <div className={styles.social}>
          <Link href="#">
            <a>
              <span className={styles.social_item}>
                <Image src={fb} alt="facebook icon" />
              </span>
            </a>
          </Link>
          <Link href="#">
            <a>
              <span className={styles.social_item}>
                <Image src={tw} alt="twitter icon" />
              </span>
            </a>
          </Link>
          <Link href="#">
            <a>
              <span className={styles.social_item}>
                <Image src={pi} alt="pinterest icon" />
              </span>
            </a>
          </Link>
          <Link href="#">
            <a>
              <span className={styles.social_item}>
                <Image src={ins} alt="instagram icon" />
              </span>
            </a>
          </Link>
        </div>
        <small className={styles.copyright}>
          © 2021 Loopstudios. All rights reserved.
        </small>
        <div className={styles.attribution}>
          <div>
            Challenge by
            <Link href="https://www.frontendmentor.io?ref=challenge">
              <a>Frontend Mentor. </a>
            </Link>
            Coded by
            <Link href="https://github.com/Foued80/Front-end-mentor-challenges">
              <a>Foued80</a>
            </Link>
          </div>

          <div>
            back to
            <Link href="https://foued80.github.io/Front-end-mentor-challenges">
              <a>All challenges</a>
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
