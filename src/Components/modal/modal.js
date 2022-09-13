import React from "react";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
const Modal = (props) => {
  return (
    <div>
      <Title>Laptop</Title>

      <Paragraph>{props.conneciton}</Paragraph>
      <Paragraph>{props.zoom}</Paragraph>
      <Paragraph>{props.vscode}</Paragraph>
      <Paragraph>       
      </Paragraph>
    </div>
  );
};

export default Modal;
