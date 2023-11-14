import TitleSection from "../TitleSection/TitleSection";
import { Container } from "react-bootstrap";
import imgCard1 from "./img/card1.webp";
import imgCard2 from "./img/card2.png";
import imgCard3 from "./img/card3.webp";
import imgCard4 from "./img/card4.png";
import "./Section.css";
import phonImg from "./img/phone-section.webp";
import SpiNeer from "./SpiNeer";
import CardSpineer from "./Card/CardSpineer";
const Section2 = () => {
  return (
    <Container>
      <TitleSection
        title="POSSIBILITIES. PERFORMANCE. POWER."
        desc="FASTER PROCESSING WITH LESS POWER"
      />

      <div className="row">
        <div className="image-phone">
          <img src={phonImg} alt="" className="img-row-phone" />
          <div className="test">
            <div className="Spineer-div">
              <div className="dot-black-1">
                <SpiNeer className="spineer1" />
                <div className="card1">
                  <CardSpineer
                    img={imgCard1}
                    title="SCORPION PROCESSOR"
                    desc="Tristique senectus et netus et malesuada fames ac turpis."
                  />
                </div>
              </div>
              <div className="dot-black-2">
                <SpiNeer className="spineer1" />
                <div className="card2">
                  <CardSpineer
                    img={imgCard2}
                    title="SCORPION PROCESSOR"
                    desc="Tristique senectus et netus et malesuada fames ac turpis."
                  />
                </div>
              </div>
              <div className="dot-black-1">
                <SpiNeer className="spineer1" />
                <div className="card1">
                  <CardSpineer
                    img={imgCard3}
                    title="48 MP CAMERA"
                    desc="Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed."
                  />
                </div>
              </div>
              <div className="dot-black-2">
                <SpiNeer className="spineer1" />
                <div className="card2">
                  <CardSpineer
                    img={imgCard4}
                    title="SCORPION PROCESSOR"
                    desc="Tristique senectus et netus et malesuada fames ac turpis."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section2;
