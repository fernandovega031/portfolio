import Icon from "../atoms/Icon";
import styles from "./SocialLinks.module.css";
import LinkedInPhoto from "../../assets/linkedin.png";
import MailPhoto from "../../assets/mail.png";
import BehancePhoto from "../../assets/behance.png";

const SocialLinks = ({ position}) => {
  return (
    <div className={styles.IconContainerLine}>
      <Icon src={LinkedInPhoto} 
      alt="LinkedIn" 
      websrc={'https://www.linkedin.com/in/fernandovega031'}
      delayIcon={'0.5'}
      position={position}/>
      <Icon src={MailPhoto} 
      alt="Mail" 
      websrc={'mailto:fernandovega031@gmail.com?subject=Pongamonos en Contacto&body=Hola, quiero ponerme en contacto contigo.'}
      delayIcon={'0.7'}
      position={position}/>
      <Icon src={BehancePhoto} 
      alt="Behance" 
      websrc={'https://www.behance.net/josfevegagu/projects'} 
      delayIcon={'0.9'}
      position={position}/>
    </div>
  );
};
export default SocialLinks;
