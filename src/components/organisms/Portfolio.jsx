import styles from "./Portfolio.module.css";
import PortfolioContainer from "../atoms/PortfolioContainer.jsx";
import TruckBurger from "../../assets/TruckBurgerFP.png";
import MySpace from "../../assets/MySpaceFP.png";
import ASLingo from "../../assets/ASLingoFP.png";

const Portfolio = () => {
    return (
      <section className={styles.portfolio}>
        <PortfolioContainer path="/truckburger" src={TruckBurger} alt={"Truck Burger's Portfolio"}/>
        <PortfolioContainer path="/myspace" src={MySpace} alt={"My Space's Portfolio"}/>
        <PortfolioContainer path="/ASLingo" src={ASLingo} alt={"ASLingo's Portfolio"}/>
      </section>
    );
  };
  export default Portfolio;
  