import "./Footer.css";
const Footer = () => {
  return (
    <footer class="w-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mx-auto text-center mb-5">
            <h4>SUBSCRIBE NOW</h4>
            <h1>GET OUR UPDATES ALWAYS FAST</h1>
            <p>YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
          </div>
          <div class="position-relative col-lg-12 mx-auto text-center mb-5">
            <input
              class="input-search"
              type="search"
              placeholder="Enter your email id"
            />
            <button class="position-absolute">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <div class="col-lg-12 mx-auto text-center mb-5 text-white">
            <a class="text-white" href="">
              SEARCH
            </a>
            <span class="fs-4 px-3">|</span>

            <a class="text-white" href="">
              HELP
            </a>
            <span class="fs-4 px-3">|</span>

            <a class="text-white" href="">
              INFORMAION
            </a>
            <span class="fs-4 px-3">|</span>

            <a class="text-white" href="">
              PRIVACY POLICY
            </a>
            <span class="fs-4 px-3">|</span>

            <a class="text-white" href="">
              SHOPPING DETAILS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
