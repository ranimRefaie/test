import ButtonFooter from "../ButtonFooter/ButtonFooter";
import "./FooterFixed.css";

const FooterFixed = () => {
  return (
    <div class="footer-fixed w-100 fixed-bottom">
      <div class="container">
        <div class="col-lg-12 d-flex justify-content-center text-white">
          <p class="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ex
            vulputate, sagittis ipsum sed, iaculis magna.
          </p>
          <ButtonFooter name="Accept" />
          <ButtonFooter name="Decline" />
        </div>
      </div>
    </div>
  );
};

export default FooterFixed;
