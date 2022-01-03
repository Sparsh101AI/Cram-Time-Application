import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <h1>"LOGO"</h1>
      </div>
      <div className="Options">
        <span>
          <a className="option">Login</a>
        </span>
        <span>
          <a className="option">Features</a>
        </span>
        <span>
          <a className="option">About Us</a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
