import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


import slide1 from "../../assets/ASLingo/slide1.png";
import slide2 from "../../assets/ASLingo/slide2.png";
import slide3 from "../../assets/ASLingo/slide3.png";
import slide4 from "../../assets/ASLingo/slide4.png";
import slide5 from "../../assets/ASLingo/slide5.png";
import slide6 from "../../assets/ASLingo/slide6.png";
import slide7 from "../../assets/ASLingo/slide7.png";
import slide8 from "../../assets/ASLingo/slide8.png";
import slide9 from "../../assets/ASLingo/slide9.png";
import slide10 from "../../assets/ASLingo/slide10.png";
import slide11 from "../../assets/ASLingo/slide11.png";
import slide12 from "../../assets/ASLingo/slide12.png";
import slide13 from "../../assets/ASLingo/slide13.png";
import slide15 from "../../assets/ASLingo/slide14.png";
import slide14 from "../../assets/ASLingo/slide15.png";




const styles = { width: "100%" };

const Portfolio3Page = () => {
  const images = [
    slide1, slide2, slide3, slide4, slide5, slide6, slide7,
    slide8, slide9, slide10, slide11, slide12, slide13, slide14, slide15
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

export default Portfolio3Page;