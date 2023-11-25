import styles from "./BrickLayout.module.css";

const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src="img/dummy_image/karol.png" alt="" />
        <img src="img/wallpapers/test.png" alt="" />
        <img src="img/dummy_image/3.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/dummy_image/flame.jpg" alt="" />
        <img src="img/wallpapers/uzi3.png" alt="" />
        <img src="img/wallpapers/keyglock.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/dummy_image/7.jpg" alt="" />
        <img src="img/dummy_image/8.jpg" alt="" />
        <img src="img/dummy_image/9.jpg" alt="" />
      </div>
    </div>
  );
};

export default BrickLayout;
