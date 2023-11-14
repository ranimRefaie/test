import Footer from "../../Components/Footer/Footer";
import FooterFixed from "../../Components/FooterFixed/FooterFixed";
import GalleryPhone from "../../Components/GalleryPhone/GalleryPhone";
import Hero from "../../Components/Hero/Hero";
import NavBar from "../../Components/NavBar/NavBar";
import NavTop from "../../Components/NavTop/NavTop";
import SecPhoneTools from "../../Components/SecPhoneTools/SecPhoneTools";
import Section2 from "../../Components/Section2/Section2";
import Section3 from "../../Components/Section3/Section3";
import SectionAccordion from "../../Components/SectionAccordion/SectionAccordion";

const Home = () => {
  return (
    <div>
      <NavTop />
      <NavBar />
      <Hero />
      <SecPhoneTools />
      <Section2 />
      <Section3 />
      <GalleryPhone />
      <SectionAccordion />
      <Footer />
      <FooterFixed />
    </div>
  );
};

export default Home;
