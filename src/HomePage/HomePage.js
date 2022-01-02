import "./HomePage.css";
import image1 from "../images/image1.png";

function HomePage() {
  return (
    <div className="container">
      <div className="box">
        <div className="col1">
          <img src={image1} alt="idk" />
        </div>
        <div className="col2">
          <h1>
            Why Study Alone, When You <br /> Can Study With{" "}
            <strong>Friends</strong>
          </h1>
          <h2>Get started now and start studying together</h2>
          <button className="btn">Join Now</button>
        </div>
      </div>
      <div className="Circle"></div>
    </div>
  );
}

export default HomePage;
