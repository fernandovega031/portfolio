import styles from "./Avatar.module.css";
import { motion } from "framer-motion";

const Avatar = ({ src, alt }) => {
    return <motion.img   initial={{ opacity: 0, x: -50 }}  // Inicia invisible y desplazado hacia abajo
    animate={{ opacity: 1, x: 0 }}   // Se hace visible y sube
    exit={{ opacity: 0, x: -50 }}    // Se desvanece y sube al salir
    transition={{ duration: 1.0, ease: "easeOut", delay : .9 }}  // Animación suave
    className={styles.Avatar} src={src} alt={alt} />;
  };
  export default Avatar;
  