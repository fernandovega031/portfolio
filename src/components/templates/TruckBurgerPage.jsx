import Header from "../organisms/Header.jsx";
import Footer from "../organisms/Footer.jsx";
import main from "../../assets/TruckBurger/Portfolio/Main.png";
import overview from "../../assets/TruckBurger/Portfolio/Description.png";
import miguel from "../../assets/TruckBurger/Portfolio/MiguelPersona.png";
import clara from "../../assets/TruckBurger/Portfolio/ClaraPersona.png";
import empMiguel from "../../assets/TruckBurger/Portfolio/MiguelEmpathy.png";
import empClara from "../../assets/TruckBurger/Portfolio/ClaraEmpathy.png";
import competitive from "../../assets/TruckBurger/Portfolio/Competitive.png";
import Information from "../../assets/TruckBurger/Portfolio/InformationArchitecture.png";
import wireframes from "../../assets/TruckBurger/Portfolio/Wireframes.png";
import visual from "../../assets/TruckBurger/Portfolio/Visual.png";
import typo from "../../assets/TruckBurger/Portfolio/Typography.png";
import color from "../../assets/TruckBurger/Portfolio/Color.png";
import outcomes from "../../assets/TruckBurger/Portfolio/Outcomes.png";
import thanks from "../../assets/TruckBurger/Portfolio/Thanks.png";



import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const styles = { width: "100%" };

const PortfolioPage = () => {

  const images = [
    main, overview, miguel, clara, empMiguel, empClara,competitive, Information, wireframes, visual, typo, color, outcomes, thanks
  ];
 
  return (
    < >


      {images.map((img, index) => {
        const { ref, inView } = useInView({ triggerOnce: true });

        return (
          <motion.img
            key={index}
            ref={ref}
            src={img}
            alt="Portfolio Image"
            style={styles}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.06 }}
          />
        );
      })}

    </>
  );
};

export default PortfolioPage;
