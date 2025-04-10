import styles from "./Portfolio.module.css";
import PortfolioContainer from "../atoms/PortfolioContainer.jsx";
import TruckBurger from "../../assets/TruckBurger/Portfolio/Main.png";
import MySpace from "../../assets/MySpaceFP.png";
import ASLingo from "../../assets/ASLingo/slide1.png";
import Gallery from "../../assets/gallery.png";


const Portfolio = () => {
    return (
      <section className={styles.portfolio}>
        <PortfolioContainer path="/ASLingo" projectName={"ASLingo"} projectDescription={"ASLingo is a web application that helps users learn American Sign Language (ASL) through interactive lessons and quizzes."} src={ASLingo} alt={"ASLingo's Portfolio"}/>
        <PortfolioContainer path="/truckburger" projectName={"Truck Burger"} projectDescription={"Truck Burger is a web application that helps users order food from their favorite restaurante with a interactive touch"} src={TruckBurger} alt={"Truck Burger's Portfolio"}/>
        <PortfolioContainer path="/myspace" projectName={"My Space"} projectDescription={"My Space is a web application that helps people find their ideal accomodation"} src={MySpace} alt={"My Space's Portfolio"}/>
        <PortfolioContainer path="/gallery" projectName={"Gallery"} projectDescription={"If you would like to see my content just click on this"} src={Gallery} alt={"My Gallery"}/>
      </section>
    );
  };
  export default Portfolio;
  