import { Card, Col, Row } from "react-bootstrap";
import "./Card.css";

const Card2 = ({ imgCard2, title, desc }) => {
  return (
    <Card>
      <Row>
        <Col
          md="4"
          className="d-flex flex-column  align-items-center align-self-center"
        >
          <img src={imgCard2} alt="" className="img-fluid rounded-start" />
        </Col>
        <Col md="8">
          <Card.Body>
            <Card.Title>
              <a>{title}</a>
            </Card.Title>
            <Card.Text>
              <p>{desc}</p>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Card2;
