import {Link} from 'react-router-dom'

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import React, { useState } from "react";

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

  getItem("Courses", "sub1", <MailOutlined />, [
    getItem('Html & Css', "5"),
    getItem("Javascript", "6"),
    getItem("ReactJs", "7"),
    getItem("Devops", "8"),
  ]),
  getItem("Designs", "sub2", <AppstoreOutlined />, [
    getItem("UI/UX", "9"),
    getItem("UI", "10"),
  ]),
];

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Navigation;
