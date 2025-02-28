import styles from "./MobileMockups.module.css";
import desktop1 from "../../assets/TruckBurger/Desktop1.png";
import desktop2 from "../../assets/TruckBurger/Desktop2.png"; 
import desktop3 from "../../assets/TruckBurger/Desktop3.png";
import desktop4 from "../../assets/TruckBurger/Desktop4.png";
import desktop5 from "../../assets/TruckBurger/Desktop5.png";
import desktop6 from "../../assets/TruckBurger/Desktop6.png";


const MobileMockups = () => {
    return (
<div className={styles.container}>
<img src={desktop1} alt="Image 1" className={styles.img1}/>
<img src={desktop2} alt="Image 2" className={styles.img2}/>
<img src={desktop3} alt="Image 3" className={styles.img3}/>
<img src={desktop4} alt="Image 4" className={styles.img4}/>
<img src={desktop5} alt="Image 5" className={styles.img5}/>
<img src={desktop6} alt="Image 6" className={styles.img6}/>

</div>
    );
  };
  
  export default MobileMockups;