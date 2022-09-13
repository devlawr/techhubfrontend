import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import "./registration.css";
import RegistrationForm from "./Form";
import { toast } from "react-toastify";

const Registration = () => {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth?.registerStatus === "success") {
      toast.success("you have successfully registered for this course, kindly expect an email from  Coding Techhub",
       { position:"bottom-center" });
    }
    if (auth?.registerStatus === "rejected") {
      toast.warning(auth?.registerError?.error, { position: "top-center" });
    }
    if (auth?.registerStatus === "rejected") {
      toast.warning(auth?.registerError?.errors, { position: "top-center" });
    }
  }, [auth?.registerStatus, auth?.registerError]);

  return (
    <>
      <div className="regwrapper">
        <div className="left">
          <h1>
            <Link to="/">CODDING TECHHUB</Link>
          </h1>
          <img
            src="https://res.cloudinary.com/aaaaaaaa123/image/upload/v1662618690/techhub/talent-guy_ici4ah.png"
            alt="talent-guy"
          />
        </div>
        <div className="right">
          <div className="form-wrapper">
            <div className="reg-logo">
              <h1>
                <Link to="/" style={{ color: "#132128" }}>
                  TECHHUB
                </Link>
              </h1>

              {auth?.registerStatus === "pending" ? (
                <div className="spinner">{<ClipLoader color="#6ed8af" />}</div>
              ) : null}

              {auth?.registerStatus === "success" ? (
                <p style={{ color: "green" }}>user successfully registered</p>
              ) : null}
              <p>
                Becoming{" "}
                <span className="green">part of a global community</span> has
                never been this easier
              </p>
            </div>
            <p>kindly fill in your information to Register</p>

            {auth?.registerStatus === "pending" ? (
              <div className="spinner">{<ClipLoader color="#6ed8af" />}</div>
            ) : null}

            <RegistrationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
