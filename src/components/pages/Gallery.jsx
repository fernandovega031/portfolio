import styles from "./Gallery.module.css";

import img1 from "../../assets/Gallery/Cliff.JPG";
import img2 from "../../assets/Gallery/Jungle.jpg";
import img3 from "../../assets/Gallery/portrait.jpg";
import img4 from "../../assets/Gallery/Venus.jpg";
import img5 from "../../assets/Gallery/Afternoon.jpg";
import img6 from "../../assets/Gallery/River.jpg";
import img7 from "../../assets/Gallery/Ship.jpg";
import img8 from "../../assets/Gallery/Dibujo.jpg";

const Home = () => {
  return (
 
<div className={styles.parent}>
    <div className={styles.div1}>
      <img src={img1} alt="" />
    </div>
    <div className={styles.div2}><img src={img2} alt="" /></div>
    <div className={styles.div3}><img src={img3} alt="" /></div>
    <div className={styles.div4}><img src={img4} alt="" /></div>
    <div className={styles.div5}><img src={img5} alt="" /></div>
    <div className={styles.div6}><img src={img6} alt="" /></div>
    <div className={styles.div7}><img src={img7} alt="" /></div>
    <div className={styles.div8}><img src={img8} alt="" /></div>
</div>
    
  );
};

export default Home;
