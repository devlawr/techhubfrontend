import React from "react";
import { Link } from "react-router-dom";

const Wrapper = (props) => {
  return (
    <div className="wrapper">
      <div className="backdrop"></div>

      <div className="brilliance">
        <p>{props.experience}</p>
      </div>
      <div className="join">
        <p>{props.join}</p>
      </div>
      <div className="brilliance">
        <p>{props.mission}</p>
      </div>
      <div className="join">
        <p>{props.race}</p>
      </div>
      <div className="joinus">
        <p> <Link to="/register">{props.word}</Link></p>
      </div>
    </div>
  );
};


export default Wrapper;
