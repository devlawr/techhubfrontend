import React from "react";
import { Typography } from "antd";
const {  Paragraph,Text } = Typography;
const Modal = (props) => {
  return (
    <div>
      <Text>Laptop</Text>

      <Paragraph>{props.connection}</Paragraph>
      <Paragraph>{props.zoom}</Paragraph>
      <Paragraph>{props.vscode}</Paragraph>
      <Paragraph></Paragraph>
    </div>
  );
};

export default Modal;
