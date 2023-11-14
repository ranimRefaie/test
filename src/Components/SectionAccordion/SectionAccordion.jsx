import TitleSection from "../TitleSection/TitleSection";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row } from "react-bootstrap";
import "./SectionAccordion.css";
import AccorDion from "../AccorDion/AccorDion";
import phoneImg from "./image/tow-phone.webp";

const SectionAccordion = () => {
  return (
    <section id="CUSTOMERS-LOVE" className="text-center">
      <Container>
        <TitleSection
          title="SEE WHY CUSTOMERS LOVE THE OUR MOBILES"
          desc="DESIGNED TO PERFECTION"
        />

        <Row>
          <div className=" col-lg-6">
            <img className="imgmobail" src={phoneImg} alt="" />
          </div>

          <div className="col-lg-6">
            <Accordion defaultActiveKey="0">
              <AccorDion
                title=" NEW GRADIENT COLOR FINISHES"
                desc=" Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui official."
                id="0"
              />
              <AccorDion
                title=" FOUR-SIDED CURVED CERAMIC BODY"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui official."
                id="1"
              />
              <AccorDion
                title=" 4000MAH HIGH-CAPACITY BATTERY"
                desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui official."
                id="2"
              />
              <AccorDion
                title=" FULLY HIDDEN CAMERA LENS"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui official."
                id="3"
              />
            </Accordion>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default SectionAccordion;
