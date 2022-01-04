import "./Navbar.css";
import React from "react";

function Navbar() {
  const [NAV, setNAVState] = React.useState("Navbar");
  const [option, setOptionState] = React.useState("option");
  const onScroll = (e) => {
    let windowPosition = window.scrollY > 1;
    if (windowPosition) {
      setNAVState("NavbarScroll");
      setOptionState("optionScroll");
    } else {
      setNAVState("Navbar");
      setOptionState("option");
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <div className={NAV}>
      <div className="Logo">
        <h1>"LOGO"</h1>
      </div>
      <div className="Options">
        <span>
          <a className={option}>Login</a>
        </span>
        <span>
          <a className={option}>Features</a>
        </span>
        <span>
          <a className={option}>About Us</a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
