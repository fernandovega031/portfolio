import styles from "./Logo.module.css";

const Logo = ({ src }) => {
    return <img className={styles.Logo} src={src} alt="Logo" />;
  };
  export default Logo;
  