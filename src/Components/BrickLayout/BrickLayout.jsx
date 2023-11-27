import styles from "./BrickLayout.module.css";

const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src="img/wallpapers/black.png" alt="" />
        <img src="img/wallpapers/test.png" alt="" />
        <img src="img/wallpapers/wents.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/dummy_image/flame.jpg" alt="" />
        <img src="img/wallpapers/uzi3.png" alt="" />
        <img src="img/wallpapers/keyglock.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/wallpapers/vic.jpeg" alt="" />
        <img src="img/wallpapers/FOB.jpeg" alt="" />
        <img src="img/wallpapers/karol.png" alt="" />
      </div>
    </div>
  );
};

export default BrickLayout;
