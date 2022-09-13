import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetState } from "../../features/regSlice";
import Navigation from "../Navigation";
import leftImg from "../../images/visual.jpg";
import StepP from "./Step";
import Skills from "../skills/skils";
import Footer from "../Footer/Footer";

import Wrapper from "../Wrapper/Wrapper";
import { data } from "../../content_option";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    navigate("/");

    dispatch(resetState());
  }, [dispatch, navigate]);
  return (
    <div>
      <Navigation />
      <Wrapper
        experience={data.experience}
        session={data.session}
        join={data.join}
        word={data.word}
      />
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

      <section>
        <Skills />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
