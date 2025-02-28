import styles from "./TextContainer.module.css";
import { motion } from "framer-motion";


const TextContainer = ({propStyle, text, alt}) => {

  
    return (
      <motion.div style={propStyle} className={styles.textContainer}
      alt={alt}>
        {text}
    </motion.div>

    );
  };
  export default TextContainer;
  