import styles from "./Icon.module.css";
import { motion } from "framer-motion";


const Icon = ({ src, alt , websrc, delayIcon, position}) => {

  
    return (
      <motion.div
      initial={{ y: position }} // Inicia fuera de la pantalla (derecha)
      animate={{ y: 0 }}        // Se desliza a la posición normal
      exit={{ y: "-100vw" }}     // Se desliza hacia la izquierda al salir
     transition={{ type: "spring",  duration: 1, delay: delayIcon }}>
    <motion.a  
            whileHover={{ y: -10 }} // Solo este div se mueve en hover
            transition={{ duration: 0.3, ease: "easeOut" }} // No afecta el slide
   className={styles.IconContainer} href={websrc} target="_blank" rel="noreferrer">
    <img className={styles.Icon} src={src} alt={alt} />
    </motion.a>
    </motion.div>

    );
  };
  export default Icon;
  