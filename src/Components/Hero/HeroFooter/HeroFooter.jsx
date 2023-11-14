import ComponentHero from "./ComponentHero";
import "./HeroFooter.css";
import photo1 from "./ImgHeroFooter/shopping.webp";
import photo2 from "./ImgHeroFooter/discount.webp";
import photo3 from "./ImgHeroFooter/help.webp";

const HeroFooter = () => {
  return (
    <div className="hero-footer">
      <ComponentHero
        img={photo1}
        title="FREE SHIPPING"
        desc="For orders over $50"
      />
      <ComponentHero
        img={photo2}
        title="OFFICIAL DISCOUNTS"
        desc="Save Big on next product"
      />
      <ComponentHero
        img={photo3}
        title="24/7 HELPLINE"
        desc="Care till the end"
      />
    </div>
  );
};

export default HeroFooter;
