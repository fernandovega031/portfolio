import styles from "./Logo.module.css";
import { useState } from "react";

const Logo = ({ srcPNG , srcGIF}) => {

  const [imageSrc, setImageSrc] = useState(srcPNG); // Imagen estática

    return (
    <img
    src={imageSrc}
    alt="Hover GIF"
    onMouseEnter={() => setImageSrc(srcGIF)} // Cambia a GIF al hacer hover
    onMouseLeave={() => setImageSrc(srcPNG)} // Vuelve a la imagen estática
    className={styles.Logo}
  />);
  };
  export default Logo;
  