import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardSpineer = ({ img, title, desc }) => {
  return (
    <Card style={{ width: "300px", border: "none", textAlign: "center" }}>
      <Card.Img
        className="tools"
        variant="top"
        src={img}
        style={{ width: "50px", margin: "auto" }}
      />
      <Card.Body>
        <Link>{title}</Link>
        <p>{desc}</p>
      </Card.Body>
    </Card>
  );
};

export default CardSpineer;
