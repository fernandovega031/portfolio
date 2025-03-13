import BentoItem from "../atoms/BentoItem.jsx";
import "./BentoGrid.css"; // Importa los estilos
import img1 from "../../assets/Gallery/Cliff.JPG";
import img2 from "../../assets/Gallery/portrait.jpg";
import img3 from "../../assets/Gallery/Jungle.jpg";
import img4 from "../../assets/Gallery/Friends.jpg";
import img5 from "../../assets/Gallery/Afternoon.jpg";
import img6 from "../../assets/Gallery/Me.jpg";
import img7 from "../../assets/Gallery/Ship.jpg";
import img8 from "../../assets/Gallery/Dibujo.jpg";
import img9 from "../../assets/Gallery/Waterfall.jpg";
import img10 from "../../assets/Gallery/Venus.jpg";
import img11 from "../../assets/Gallery/Port.jpg";

const BentoGrid = () => {
  return (
    <div className="bento-container">
      <BentoItem className="long">
      <img src={img7} alt="Ship" className="imgLarge" />

      </BentoItem>

      <BentoItem className="small purple">
      <img src={img4} alt="Friends" className="imgLarge" />
      </BentoItem>

      <BentoItem className="small ">
      <img src={img2} alt="Jungle" className="imgLarge" />
      </BentoItem>

      <BentoItem className="medium">

      <img src={img6} alt="Me" className="imgLarge" />
      </BentoItem>

      <BentoItem className="large yellow">
      <img src={img3} alt="Cliff" className="imgLarge" />
      </BentoItem>

      <BentoItem className="long red">
      <img src={img1} alt="Cliff" className="imgLarge" />
      </BentoItem>

      <BentoItem className="large">
      <h2>More content on my IG</h2>
      <a href="https://www.instagram.com/fernandovega031/" className="cta-button">@fernandovega031</a>
      </BentoItem>

      <BentoItem className="medium">
      <img src={img8} alt="Drawing" className="imgLarge" />
      </BentoItem>

      <BentoItem className="long">
      <img src={img11} alt="Port" className="imgLarge" />
      </BentoItem>   
        
      <BentoItem className="medium">
      <img src={img5} alt="Afternoon" className="imgLarge" />
      </BentoItem>   

        <BentoItem className="medium blue">
      <img src={img10} alt="Venus" className="imgLarge" />
      </BentoItem>

      <BentoItem className="long">
      <img src={img9} alt="Waterfall" className="imgLarge" />
      </BentoItem> 



    </div>
  );
};

export default BentoGrid;