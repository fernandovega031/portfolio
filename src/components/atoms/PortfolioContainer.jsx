import styles from "./PortfolioContainer.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioContainer = ({path, src , alt, onClick, projectName, projectDescription}) => {

    return <Link to={path}> 
    <div className={styles.container}>
     <motion.img
    whileHover={{ y: -10 }} // Mueve hacia arriba en hover
    transition={{ type: "spring", stiffness: 100 }}
    className={styles.contentMiddle} src={src} alt={alt}
    onClick={onClick} />

    <div className={styles.textContainer}>
    <h3>{projectName}</h3>
    <p>{projectDescription}</p>
    </div>
    </div>
    </Link>
  };
  export default PortfolioContainer;
  