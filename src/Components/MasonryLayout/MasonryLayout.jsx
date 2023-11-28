// import styles of this component
import styles from "./MasonryLayout.module.css";

// import other react pkg to use
import Masonry from "react-masonry-css";

// import other component to use
import MasonryBox from "./MasonryBox/MasonryBox";
import Zoom from "react-medium-image-zoom";

import React, { useState, useEffect } from "react";

import { Spotify } from "react-spotify-embed";
// MasonryLayout Component
const MasonryLayout = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = (event) => {
      if (modalOpen) {
        event.preventDefault();
      }
    };

    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", handleScroll, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleScroll);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleScroll);
    };
  }, [modalOpen]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
      >
        {images.map((item, index) => (
          <div key={index} onClick={() => openModal(item)}>
            <MasonryBox
              key={item.id}
              wallSrc={item.src}
              userProf={item.user.src}
              userName={item.user.name}
              userJob={item.user.job}
            />
          </div>
        ))}
      </Masonry>
      {modalOpen && (
        <div className={styles["modal"]}>
          <span className={styles["close"]} onClick={closeModal}>
            &times; close
          </span>{" "}
          <div className={styles["modalDes"]}>
            <div className={styles["userInfo"]}>
              <div
                className={`${styles["my-masnry-user-prof-desc"]} flex flex-column `}
              >
                <h1>{selectedImage.user.name}</h1>
                <h3>{selectedImage.user.job}</h3>
              </div>
            </div>
            <div class={styles["line"]}></div>
            {isMobile ? (
              "test"
            ) : (
              <Spotify
                className={styles["spotifyWeb"]}
                link={
                  selectedImage.album
                    ? selectedImage.album
                    : "https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw"
                }
              />
            )}
          </div>
          <img
            className={`${styles["modal-content"]} flex flex-column`}
            src={selectedImage.src}
            alt="Zoomed Image"
          />
        </div>
      )}
    </>
  );
};

export default MasonryLayout;
