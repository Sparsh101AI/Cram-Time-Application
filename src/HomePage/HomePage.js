import "./HomePage.css";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import Particles from "react-tsparticles";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

function HomePage() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#a0abe3",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#b2bdfb",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: false,
              value: 25,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="box">
        <div className="col1">
          <img src={image1} alt="idk" />
        </div>
        <div className="col2">
          <h1>
            Why Study Alone, When You <br /> Can Study With{" "}
            <span>
              {/* Style will be inherited from the parent element */}
              <strong>
                <Typewriter
                  words={["Friends", "Peers", "Classmates"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </strong>
            </span>
          </h1>

          <h2>Get started now and start studying together</h2>
          <button className="btn">Join Now</button>
        </div>
      </div>
      <hr className="line" />
      <div className="Feature">
        <div className="col3">
          <img src={image2} alt="idk" />
        </div>
        <div className="col4">
          <h1 className="header">
            Study Using <strong>Flash Cards</strong>
          </h1>
          <h2>
            Make your study sessions interesting using Flash Cards! Flash Cards
            are an effective method to memorize your study material and you can
            have fun testing yourself amongst your friends using CramTime
          </h2>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default HomePage;
