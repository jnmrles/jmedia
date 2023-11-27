// import styles of this component
import styles from "./Nav.module.css";
import { SocialIcon } from "react-social-icons";

// import other components
import Button from "../Elements/Button/Button";

// import other react pkg to use
import { HambergerMenu } from "iconsax-react";

// Nav component
const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
      <h1 className={styles["nav-span"]}>
        J<span className={styles["nav-title"]}>MEDIA</span>
      </h1>
      {/* <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
        <li className={`${styles["nav-item"]} ${styles.active}`}>
          <a href="" className={styles["nav-link"]}>
            Home
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="" className={styles["nav-link"]}>
            Wallpapers
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="" className={styles["nav-link"]}>
            Collections
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="" className={styles["nav-link"]}>
            Artists
          </a>
        </li>
        <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
          <a href="" className={styles["nav-link"]}>
            Explore
          </a>
        </li>
        <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
          <a href="" className={styles["nav-link"]}>
            Blog
          </a>
        </li>
      </ul> */}
      <div className={`flex ${styles["navbar-buttons"]}`}>
        {/* <Button theme="transparent">Login</Button> */}
        {/* <Button theme="matrix">INQUIRE</Button> */}

        <SocialIcon className={styles["socials"]} url="https://instagram.com" />

        <button className={styles["button-33"]} role="button">
          INQUIRE
        </button>
      </div>
      {/* <div className={styles["navbar-responsive-menu"]}>
        <Button theme="transparent">
          <HambergerMenu size="32" color="var(--white-100)" />
        </Button>
      </div> */}
    </nav>
  );
};

export default Nav;
