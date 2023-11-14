import { Link } from "react-router-dom";
// import shop from "./shopping.webp";
const ComponentHero = ({ img, title, desc }) => {
  return (
    <div className="component-hero">
      <img src={img} alt="" />
      <div>
        <Link>{title}</Link>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ComponentHero;
