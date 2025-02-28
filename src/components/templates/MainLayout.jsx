
import Hero from "../organisms/Hero.jsx";
import Portfolio from "../organisms/Portfolio.jsx";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div >
      <Hero />
      <Portfolio />
    <div className={styles.containerDiv}>
      <div className={styles.hline}></div>
    </div>
    </div>
  );
};

export default MainLayout;
