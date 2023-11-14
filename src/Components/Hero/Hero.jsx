import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "./imageHero/phono-slider-1.webp";
import slide2 from "./imageHero/phono-slider-2.webp";
import slide3 from "./imageHero/phono-slider-3.jpg";
import HeroFooter from "./HeroFooter/HeroFooter";

const Hero = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="c-item">
          <img className="item-slide" src={slide1} alt="" />
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img className="item-slide" src={slide2} alt="" />
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img className="item-slide" src={slide3} alt="" />
        </Carousel.Item>
      </Carousel>
      <HeroFooter />
    </div>
  );
};

export default Hero;
