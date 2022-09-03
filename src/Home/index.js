import React from "react";
import Navigation from "../Navigation";
import leftImg from "../images/visual.jpg";
import StepP from "./Step";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="backdrop"></div>
        <Navigation />

        <div className="brilliance">
          <p>connecting opportunity with experience</p>
        </div>
        <div className="join">
          <p>Join TECHHUB. the training ground for Technologist</p>
        </div>
        <div className="joinus">
          <p>Join us</p>
        </div>
      </div>
      <main>
        <div className="first-section">
          <div className="launch">
            <p>
              Coding techhub Launches New Platform to Power the Future of
              Customized Work
            </p>
          </div>

          <div className="more">
            <div className="span">
              <p>find out more</p>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className="mid-section">
          <div className="left-img">
            <img src={leftImg} alt="mid-section-left" />
          </div>
          <div className="future">
            <h3>Empower your Future</h3>
            <h2>why you would want to learn with coding techhub</h2>

            <ul>
              <li>hands on training</li>
              <li>Career mentorship</li>
              <li>Career guidance</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="team">
          <div className="backdrop1"></div>
          <div className="team-left">
            <h1>Build a brilliant team quickly</h1>
            <div>
              <p>
                Brilliant minds and companies come together to build the future
              </p>
            </div>
            <div className="team-btn">
              <p>Build your dream team</p>
            </div>

            <p>Get the Enterprise Advantage </p>
          </div>
          <div className="team-right">
            <StepP />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
