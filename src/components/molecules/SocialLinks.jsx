import Icon from "../atoms/Icon";

import "./SocialLinks.css";
import LinkedInPhoto from "../../assets/linkedin.png";
import MailPhoto from "../../assets/mail.png";
import BehancePhoto from "../../assets/behance.png";

const SocialLinks = ({className, position}) => {
  return (
    <div  className={`IconContainerLine ${className}`}>
      <Icon src={LinkedInPhoto} 
      alt="LinkedIn" 
      websrc={'https://www.linkedin.com/in/fernandovega031'}
      delayIcon={'1.2'}
      position={position}/>
      <Icon src={MailPhoto} 
      alt="Mail" 
      websrc={'mailto:fernandovega031@gmail.com?subject=Pongamonos en Contacto&body=Hola, quiero ponerme en contacto contigo.'}
      delayIcon={'1.5'}
      position={position}/>
      <Icon src={BehancePhoto} 
      alt="Behance" 
      websrc={'https://www.behance.net/josfevegagu/projects'} 
      delayIcon={'1.7'}
      position={position}/>
    </div>
  );
};
export default SocialLinks;
