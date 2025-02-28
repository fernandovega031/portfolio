
import styles from "./Portfolio1.module.css";
import TextContainer from "../atoms/TextContainer";
import logo from "../../assets/TruckBurger/TBLogo.png";
import photo2 from "../../assets/TruckBurger/Desktop1.png";
import photo1 from "../../assets/TruckBurger/FrontPhoto.png";
import photo3 from "../../assets/TruckBurger/Ilustrator1.png";
import photo4 from "../../assets/TruckBurger/Challenge.png";
import photo5 from "../../assets/TruckBurger/Solution.png";

const Portfolio1 = () => {
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.container1}>
        <div className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>Truck Burger</h1>
        </div>

        <div className={styles.text}>
                <h2 className={styles.mainTitle}>Web Site</h2>
                <h3 className={styles.subtitle}>UI/UX Case Study</h3>
            </div>

        <div className={styles.roles}>
            <h4 className={styles.roleTitle}>Role:</h4>
            <div className={styles.roleItems}>
                <span>UX Researcher</span>
                <span>Wireframing</span>
                <span>UI Designer</span>
            </div>
        </div>
        </div>
        <div className={styles.container2}>
             <div className={styles.images}>
                <img src={photo1} alt="Image 1" className={styles.image1} />
                <img src={photo2} alt="Image 2" className={styles.image2} />
            </div>

        </div>
    </div>

    <div>
    <h2 className={styles.SectionTitle}>Project Overview</h2>

    <div className={styles.parent2}>
        <TextContainer propStyle={{gridColumn: 'span 2 / span 2', gridRow: 'span 2 / span 2',  }} className={styles.Con1} text={"Develop a website for a fast food restaurant, allowing users to contact the restaurant and order from the menu."} />
        <TextContainer propStyle={{gridColumn: 'span 2 / span 2', gridRow: 'span 2 / span 2',    gridColumnStart: '3'}}className={styles.Con2} text={"Includes all necessary features for food ordering, with options for delivery and pick-up."} />
        <div className={styles.TruckImage}><img src={photo3} alt="" /></div>
        <TextContainer propStyle={{gridColumn: 'span 2 / span 2', gridRow: 'span 2 / span 2', gridColumnStart: '3',gridRowStart: '3' }}className={styles.Con4} text={"The site will be user-friendly and accessible, enabling orders from various devices whether users are at the office or at home."} />
        </div>

        <h2 className={styles.SectionTitle}>Challenge & Solutions</h2>
        <div className={styles.parent2}>
        <TextContainer propStyle={{gridColumn: 'span 2 / span 2', gridRow: 'span 2 / span 2',  }} className={styles.Con1} text={"A small fast-food business aims to develop a website to showcase its menu and implement an online ordering feature, providing customers with an additional option to place their orders at the establishment."} />
        <div className={styles.gridChallenge}><img  src={photo4} alt="" /></div>
        <div className={styles.TruckImage}><img src={photo5} alt="" /></div>
        <TextContainer propStyle={{gridColumn: 'span 2 / span 2', gridRow: 'span 2 / span 2', gridColumnStart: '3',gridRowStart: '3' }}className={styles.Con4} text={"Take into account the opinions of users who have experienced frustration when ordering through fast-food apps and implement effective solutions to minimize their discomfort."} />
        </div>

    </div>
    </div>
    


  );
};

export default Portfolio1;
