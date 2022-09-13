import React from "react";
import Navigation from "../../Components/Navigation";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import { data } from "../../content_option";
import AboutWrapper from "../../Components/aboutWrapper/AboutUsWrapper";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Navigation />
      <AboutWrapper race={data.race} experience={data.experience} />

      <>
        <Container className="wrappers">
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/aaaaaaaa123/image/upload/v1662618985/techhub/about-img-1_mgrkzr.jpg"
              style={{ width: "100%" }}
            />
            <Card.Body>
              <Card.Title
                style={{ textAlign: "center", color: "rgb(39, 156, 245)" }}
              >
                Our Vision
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                our vision is to see youth and youger generation maximized their
                potentials by plugging into the tech indutry.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/aaaaaaaa123/image/upload/v1662619009/about-img-2_zjuvyf.jpg"
              style={{ width: "100%" }}
            />
            <Card.Body>
              <Card.Title
                style={{ textAlign: "center", color: "rgb(39, 156, 245)" }}
              >
                Our Mission
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                To plug the youth and young adult into the ralities that abound
                in the 21st century hi-tech driven global economy
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/aaaaaaaa123/image/upload/v1662619025/about-img-3_s8uvsz.jpg"
              style={{ width: "100%" }}
            />
            <Card.Body>
              <Card.Title
                style={{ textAlign: "center", color: "rgb(39, 156, 245)" }}
              >
                Company History
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Coding Techhub is Tech enterprice powered by the Redeemed
                Christian Church of God with the aim of building the youth and
                youger generation to attain stardom in the Tech world, we teach
                with hands on pactice on highlighted tech languages following an
                easy to grab course outline from basic to advance and also train
                student and help them secure a good job in the tech industry
                both onsite and offsite. we run both virtual and offline class
                following the same course outline.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Container fluid className="staff">
          <Footer />
        </Container>
      </>
    </div>
  );
};

export default About;
