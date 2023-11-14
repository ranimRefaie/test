import { useState } from "react";
import "./NavTop.css";
const NavTop = () => {
  const [close, setClose] = useState(true);

  return (
    <div className="">
      {close ? (
        <div className="nav-top">
          <h5>Long Weekend Sale Up to 50% OFF Shop Now</h5>
          <button onClick={() => setClose(false)}>
            <i className="remove fa-solid fa-xmark"></i>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default NavTop;
