import styles from "./TitleSection.module.css";

const TitleSection = ({ titleName }) => {
    return (
              <div className={styles.Titlecontainer}>
              <div className={styles.Titlehline}></div>
              <h5 className={styles.Title}>{titleName}</h5>
              <div className={styles.Titlehline}></div>
              </div>
    );
  };
  
  export default TitleSection;