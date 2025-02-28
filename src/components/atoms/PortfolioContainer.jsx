import styles from "./PortfolioContainer.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioContainer = ({path, src , alt, onClick}) => {

    return <Link to={path}> 
     <motion.img
    whileHover={{ y: -10 }} // Mueve hacia arriba en hover
    transition={{ type: "spring", stiffness: 100 }}
    className={styles.contentMiddle} src={src} alt={alt}
    onClick={onClick} />;

    </Link>
  };
  export default PortfolioContainer;
  