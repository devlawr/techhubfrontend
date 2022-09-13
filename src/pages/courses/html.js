import React from "react";
import Navigation from "../../Components/Navigation";
import SideNav from "../../Components/SideNav/index";

const Html = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div style={{ display: "flex" }} className="side-nav">
        <div className="side-nav">
          <SideNav />
        </div>
        <p
          style={{
            marginTop: "200px",
            marginLeft: "100px",
            paddingRight: "20px",
          }}
        >
          course outline will be posted soon but you can view the basics of html
          and css is in this{" "}
          <a
            href="https://www.freecodecamp.org/news/html-and-css-course"
            style={{ color: "blue" }}
          >
            {" "}
            video tutorial{" "}
          </a>
        </p>
      </div>
    </>
  );
};

export default Html;
