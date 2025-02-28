import styles from "./MobileMockups.module.css";
import phtoto1 from "../../assets/TruckBurger/Phone1.png";
import phtoto2 from "../../assets/TruckBurger/Phone2.png"; 
import phtoto3 from "../../assets/TruckBurger/Phone3.png";
import phtoto4 from "../../assets/TruckBurger/Phone5.png";
import phtoto5 from "../../assets/TruckBurger/Phone6.png";
import phtoto6 from "../../assets/TruckBurger/Phone7.png";
import phtoto7 from "../../assets/TruckBurger/Phone8.png";
import phtoto8 from "../../assets/TruckBurger/Phone9.png";
import phtoto9 from "../../assets/TruckBurger/Phone10.png";

const MobileMockups = () => {
    return (
<div className={styles.container}>
<img src={phtoto1} alt="Image 1" className={styles.img1}/>
<img src={phtoto2} alt="Image 2" className={styles.img2}/>
<img src={phtoto3} alt="Image 3" className={styles.img3}/>
<img src={phtoto4} alt="Image 4" className={styles.img4}/>
<img src={phtoto5} alt="Image 5" className={styles.img5}/>
<img src={phtoto6} alt="Image 6" className={styles.img6}/>
<img src={phtoto7} alt="Image 7" className={styles.img7}/>
<img src={phtoto8} alt="Image 8" className={styles.img8}/>
<img src={phtoto9} alt="Image 9" className={styles.img9}/>
</div>
    );
  };
  
  export default MobileMockups;