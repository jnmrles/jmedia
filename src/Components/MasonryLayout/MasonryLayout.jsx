// import styles of this component
import styles from "./MasonryLayout.module.css";

// import other react pkg to use
import Masonry from "react-masonry-css";

// import other component to use
import MasonryBox from "./MasonryBox/MasonryBox";
import Zoom from "react-medium-image-zoom";

import React, { useState, useEffect } from "react";
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

    return () => {
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
          <div key={index} onClick={() => openModal(item.src)}>
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
            &times;
          </span>
          <img
            className={styles["modal-content"]}
            src={selectedImage}
            alt="Zoomed Image"
          />
        </div>
      )}
    </>
  );
};

export default MasonryLayout;
