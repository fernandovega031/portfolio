import Header from "../organisms/Header.jsx";
import Footer from "../organisms/Footer.jsx";
import main from "../../assets/TruckBurger/Portfolio/Main.png";
import overview from "../../assets/TruckBurger/Portfolio/ProjectOverview.png";
import challenge from "../../assets/TruckBurger/Portfolio/ChallegeSolution.png";
import miguel from "../../assets/TruckBurger/Portfolio/Miguel.png";
import clara from "../../assets/TruckBurger/Portfolio/Clara.png";
import empMiguel from "../../assets/TruckBurger/Portfolio/EmpathyMiguel.png";
import empClara from "../../assets/TruckBurger/Portfolio/EmpathyClara.png";
import InfoArchi from "../../assets/TruckBurger/Portfolio/InformationArchitecture.png";
import audit from "../../assets/TruckBurger/Portfolio/CompetitiveAudit.png";


import flow from "../../assets/TruckBurger/Portfolio/UserFlow.png";
import wireframes from "../../assets/TruckBurger/Portfolio/Wireframes.png";
import vs from "../../assets/TruckBurger/Portfolio/VisualDesign.png";
import vsMobile from "../../assets/TruckBurger/Portfolio/VisualDesignMobile.png";
import vsDesktop from "../../assets/TruckBurger/Portfolio/VisualDesignDesktop.png";
import color from "../../assets/TruckBurger/Portfolio/Color.png";
import typo from "../../assets/TruckBurger/Portfolio/Typography.png";
import outcomes from "../../assets/TruckBurger/Portfolio/Outcomes.png";
import lesson from "../../assets/TruckBurger/Portfolio/LessonLearned.png";
import thanks from "../../assets/TruckBurger/Portfolio/Greetings.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const styles = { width: "100%" };

const PortfolioPage = () => {

  const images = [
    main, overview, challenge, miguel, clara, empMiguel, empClara,
    InfoArchi, audit, flow, wireframes, vs, vsMobile, vsDesktop, color, typo, outcomes, lesson, thanks
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
