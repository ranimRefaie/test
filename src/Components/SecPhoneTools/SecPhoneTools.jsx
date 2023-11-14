import "./SecPhoneTools.css";
import TitleSection from "../TitleSection/TitleSection";
import CardTools from "./CardTools/CardTools";
import DualCamera from "./ImgTools/2.webp";
import Prettey from "./ImgTools/3.webp";
import Ram from "./ImgTools/1.webp";
const SecPhoneTools = () => {
  return (
    <div>
      <TitleSection
        title="WHAT MAKES THE ESSENTIAL DIFFERENT"
        desc="EXPERIENCE HIGH PERFORMANCE AND SECURE"
      />
      <div className="section-tools">
        <CardTools
          img={DualCamera}
          title1="PERFECT CUT"
          title2="DUAL CAMERA"
          desc="Tristique senectus et netus et malesuada ant reiet fames."
        />
        <CardTools
          img={Prettey}
          title1="PRETTY"
          title2="INTELLIGENT PROCESSING"
          desc="Consequat ac habit amet asse felis donec et odio pellentesque diam."
        />
        <CardTools
          img={Ram}
          title1="MOST POPULAR"
          title2="8GB DDR5 RAM"
          desc="Dictum varius duis at consectetur lorem donec massa sap faucibus."
        />
      </div>
    </div>
  );
};

export default SecPhoneTools;
