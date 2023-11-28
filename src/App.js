import { useState } from "react";

// import styles of this component
import styles from "./App.module.css";

// import other components to use
import Header from "./Components/Header/Header";
import MasonryLayout from "./Components/MasonryLayout/MasonryLayout";
import ContainerCard from "./Components/ContainerCard/ContainerCard";
import Dropdown from "./Components/Elements/Dropdown/Dropdown";

// import json files
import images from "./Jsons/Images.json";

import Footer from "./Components/Footer/Footer";

// App component
const App = () => {
  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Images",
      active: true,
    },
    {
      id: 2,
      title: "Latin Artists",
      active: false,
    },
    {
      id: 3,
      title: "Hip-Hop/Rap Artists",
      active: false,
    },
    {
      id: 4,
      title: "Other Artists",
      active: false,
    },
    // {
    //   id: 5,
    //   title: "Test Images",
    //   active: false,
    // },
  ];

  const [categoryImage, setCategoryImage] = useState(images.categories.all);

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter((item) => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0];
        return item.toLowerCase().includes(titleSplited);
      });
      return [...images.categories[categoryChoose]];
    });
  };

  return (
    <>
      <Header />
      <div
        className="flex justify-content-center"
        style={{ marginTop: "50px", padding: "50px" }}
      >
        <ContainerCard>
          <div
            className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}
          >
            <h1>Our Work</h1>
            <Dropdown
              title="All Images"
              items={ddItems}
              liftingDdTextUp={takeDdTitle}
            />
          </div>
          <MasonryLayout images={categoryImage} />
          <a className={styles["email"]} href="mailto:johndoe@fakeemail.com">
            <button className={styles["button-33"]} role="button">
              INQUIRE
            </button>
          </a>
        </ContainerCard>
      </div>
      <Footer />
    </>
  );
};

export default App;
