// import styles of this component
import styles from "./Header.module.css";

// import other components
import ContainerCard from "../ContainerCard/ContainerCard";
import Nav from "../Nav/Nav";
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import something from react packages
import { SearchNormal1 } from "iconsax-react";
import { Setting4 } from "iconsax-react";

import { TypeAnimation } from "react-type-animation";

// import jsons
import JsonHeader from "../../Jsons/HeaderBoxes.json";

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
      <ContainerCard className="flex flex-column">
        <div className={styles["blur-circle-shape"]}></div>
        {/* <video autoPlay muted loop id="myVideo">
          <source
            src="https://www.youtube.com/watch?v=24Sz-tGLfWA&ab_channel=xcharamybeloved"
            type="video/mp4"
          />
        </video> */}

        <Nav />
        <BrickLayout />

        <div
          className={`${styles["headings-header"]} flex justify-content-center flex-column  `}
        >
          <h2 className={styles["heading-header-title"]}>
            Touring Photographer + Videographer 📸🤘
            {/* <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "A Music Photographer ",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Creative Director",
                1000,
                "A Multi-Media Designer",
                1000,
                "A Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            /> */}
          </h2>
          <h1 className={styles["heading-header-second-title"]}>
            Capturing Musics Most Iconic Moments <br />
            One <span>FRAME</span> at a time
          </h1>
          {/*
          <div className={`${styles["search-bar"]} flex align-items-center`}>
            <SearchNormal1 size="30" color="var(--white-100)" />
            <input
              type="text"
              className={styles["search-input"]}
              placeholder="Search who can change the world"
            />
            <button
              className={`${styles["search-btn"]} flex justify-content-center align-items-center`}
            >
              <Setting4 size="20" color="var(--dark-900)" />
            </button>
          </div> */}

          <HeaderBoxes titles_numbers={JsonHeader.informations} />
        </div>
      </ContainerCard>
    </header>
  );
};

export default Header;
