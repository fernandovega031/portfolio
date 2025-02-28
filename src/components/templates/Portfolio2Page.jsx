import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../organisms/Header.jsx";
import Footer from "../organisms/Footer.jsx";
import main from "../../assets/MySpace/Main.png";
import story1 from "../../assets/MySpace/Story1.png";
import story2 from "../../assets/MySpace/Story2.png";
import overview from "../../assets/MySpace/overview.png";
import goal from "../../assets/MySpace/Goal.png";
import priya from "../../assets/MySpace/Priya.png";
import carlos from "../../assets/MySpace/Carlos.png";
import persona from "../../assets/MySpace/Persona.png";
import InfoArchi from "../../assets/MySpace/InfoArchi.png";
import audit from "../../assets/MySpace/audit.png";
import visual from "../../assets/MySpace/Visual.png";
import wireframes from "../../assets/MySpace/Wire.png";
import color from "../../assets/MySpace/Color.png";
import typo from "../../assets/MySpace/Typo.png";
import outcomes from "../../assets/MySpace/outcomes.png";
import lesson from "../../assets/MySpace/lesson.png";

const styles = { width: "100%" };

const Portfolio2Page = () => {
  const images = [
    main, story1, story2, overview, goal, color, typo,
    persona, priya, carlos, InfoArchi, audit, wireframes, visual, outcomes, lesson
  ];

  return (
    <>
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
            transition={{ duration: 0.8, delay: index * 0.08 }}
          />
        );
      })}

    </>
  );
};

export default Portfolio2Page;