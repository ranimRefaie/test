import TitleSection from "../TitleSection/TitleSection";
import { Card, Col, Container, Row } from "react-bootstrap";
import imgCard1 from "./Card/img/INTELLIGENT-PROCESSOR.png";
import imgCard2 from "./Card/img/HD-SURROUND-AUDIO.webp";
import imgCard3 from "./Card/img/STYLISH-BEVEL-EDGES.webp";
import imgCard4 from "./Card/img/Wifi.webp";
import imgCard5 from "./Card/img/THREADING-img.webp";
import imgCard6 from "./Card/img/CLOUD-img.png";
import Card1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import phone from "./Card/img/center-phone-img.webp";

const Section3 = () => {
  return (
    <Container id="features">
      <TitleSection
        title="INNOVATIVE QUALITIES & FEATURES"
        desc="SHOW YOURS TO THE WORLD"
      />

      <Row>
        <Col lg="4">
          <Card1
            imgCard1={imgCard1}
            title="INTELLIGENT PROCESSOR"
            desc="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd
                                        mana erti qeueri"
          />
          <Card1
            imgCard1={imgCard2}
            title="HD SURROUND AUDIO"
            desc="Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis
                                        mauris sit am."
          />
          <Card1
            imgCard1={imgCard3}
            title="STYLISH BEVEL EDGES"
            desc="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incidid"
          />
        </Col>

        <Col lg="4">
          <img src={phone} alt="" />
        </Col>

        <Col lg="4">
          <Card2
            imgCard2={imgCard4}
            title="4.0 WIFI SPECS"
            desc="Commodo nulla facilisi nullam vehicula ipsum a arcu sagitis
                                        ipsum sed iacus ."
          />
          <Card2
            imgCard2={imgCard5}
            title="MULIT TASKING & THREADING"
            desc="Amet consectetur adipiscing velit laoreet nega id elit
                                        pellentesque habitant morbi ."
          />
          <Card2
            imgCard2={imgCard6}
            title="CLOUD STORAGE"
            desc="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididun"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Section3;
