import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import ModalContent from "../modal/modal";

const Wrapper = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/session");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="wrapper">
      <div className="backdrop"></div>

      <div className="brilliance">
        <p>{props.experience}</p>
      </div>
      <div className="session" onClick={showModal}>
        <p>{props.session}</p>
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
        <p>
          {" "}
          <Link to="/register">{props.word}</Link>
        </p>
      </div>
      <div className="modal">
        <Modal
          title="Requirements for free sessions with the tutor vitually"
          open={isModalOpen}
          onOk={handleOk}
          visible={isModalOpen}
          onCancel={handleCancel}
        >
          <ModalContent
            connection="fast internet connections"
            zoom="zoom app installed on the laptop"
            vscode="Visual studio code install on the laptop"
          />
        </Modal>
      </div>
    </div>
  );
};

export default Wrapper;
