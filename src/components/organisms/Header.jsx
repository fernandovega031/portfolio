import Logo from "../atoms/Logo.jsx";
import LogoPhoto from "../../assets/LogoFV.png";
import LogoGIF from "../../assets/LogoAnimated.gif";
import SocialLinks from "../molecules/SocialLinks.jsx";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({path}) => {
  return (
    <header className={styles.header}>
      <Link to={path}> 
      <Logo srcPNG={LogoPhoto} srcGIF={LogoGIF}/>
      </Link>
      <b className={styles.nameLabel}>Fernando Vega</b>

      <SocialLinks position={'-100vw'}/>
    
    </header>
  );
};
export default Header;
