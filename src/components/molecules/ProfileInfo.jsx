import Avatar from "../atoms/Avatar.jsx";
import profilePhoto from "../../assets/profilePhoto.jpg";
import styles from "./ProfileInfo.module.css";
import { motion } from "framer-motion";

const ProfileInfo = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 0 }}  // Inicia invisible y desplazado hacia abajo
    animate={{ opacity: 1, y: 0 }}   // Se hace visible y sube
    exit={{ opacity: 0, y: 0 }}    // Se desvanece y sube al salir
    transition={{ duration: 0.9, ease: "easeOut" }}  // Animación suave
    className={styles.HeroSection}>
      
      <Avatar src={profilePhoto} alt="Fernando Vega" />
      <motion.div initial={{ opacity: 0, y: 50 }}  // Inicia invisible y desplazado hacia abajo
      animate={{ opacity: 1, y: 0 }}   // Se hace visible y sube
      exit={{ opacity: 0, y: -50 }}    // Se desvanece y sube al salir
      transition={{ duration: 1, ease: "easeOut", delay : .5 }}  // Animación suave
      className={styles.TextContainer}>

      <div className={styles.NameLine}>
      <div className={styles.theLine}></div>
      <h2 className={styles.NameUser}>Fernando Vega</h2>
      </div>
      <h3 className={styles.TitleUser}>UI Designer / </h3>
      <h3 className={styles.TitleUser}>Front End Developer</h3>
      <p className={styles.DescriptionUser}>
        <strong>Fernando Vega</strong> is a Mexico-based UI Designer & Front End Developer, who has a
        creative and proactive approach, seeking new challenges that allow him to showcase his best
        qualities and overcome complex obstacles.
      </p>
      </motion.div>
      </motion.div>
  );
};
export default ProfileInfo;
