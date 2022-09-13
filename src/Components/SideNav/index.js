import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  PieChartOutlined,
  ContainerOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link to="/">Home</Link>, "1", <PieChartOutlined />),
  getItem(<Link to="/register">Register</Link>, "2", <DesktopOutlined />),
  getItem(<Link to="/about">About Us</Link>, "3", <ContainerOutlined />),
  getItem(<Link to="/contact">Contact US</Link>, "4", <ContainerOutlined />),

  getItem(
    <Link to="/html" style={{ color: "green" }}>
      Courses
    </Link>,
    "sub1",
    <MailOutlined />,
    [
      getItem(<Link to="/html">Html & Css</Link>, "5"),
      getItem(<Link to="/course">Javascript</Link>, "6"),
      getItem(<Link to="/course">React Js</Link>, "7"),
      getItem(<Link to="/course">Dev ops</Link>, "8"),
    ]
  ),
  getItem(
    <Link to="/course" style={{ color: "green" }}>
      Designs
    </Link>,
    "sub2",
    <AppstoreOutlined />,
    [getItem(<Link to="/course">UI/UX</Link>, "9")]
  ),
];

const App = (params) => {
  const onClick = (e) => {};

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default App;
