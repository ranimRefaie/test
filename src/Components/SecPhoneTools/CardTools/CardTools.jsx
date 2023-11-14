import "./CardTools.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const CardTools = ({ img, title1, title2, desc }) => {
  return (
    <div className="card-tools">
      <Card style={{ width: "25rem", border: "none", textAlign: "center" }}>
        <Card.Img className="tools" variant="top" src={img} />
        <Card.Body>
          <Link>{title1}</Link>
          <Link>{title2}</Link>
          <p>{desc}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardTools;
