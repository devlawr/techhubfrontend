import React from "react";
import Navigation from "../../Components/Navigation";
import SideNav from "../../Components/SideNav/index";

const Others = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div style={{ display: "flex" }} className="side-nav">
        <div className="side-nav">
          <SideNav />
        </div>
        <div>
          <h3
            style={{
              marginTop: "200px",
              marginLeft: "100px",
              paddingRight: "20px",
            }}
          >
            course outline will be posted soon
          </h3>
        </div>
      </div>
    </>
  );
};

export default Others;
