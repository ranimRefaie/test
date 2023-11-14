import Accordion from "react-bootstrap/Accordion";
import "./AccorDion.css";

const AccorDion = ({ title, desc, id }) => {
  return (
    <Accordion.Item eventKey={id}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>{desc}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccorDion;
