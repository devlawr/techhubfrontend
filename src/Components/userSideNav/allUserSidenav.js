import { Link } from "react-router-dom";
import { PieChartOutlined, DesktopOutlined } from "@ant-design/icons";
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
  getItem(<Link to="/users">All Users</Link>, "1", <PieChartOutlined />),
  getItem(<Link to="/session-list">Session-List</Link>, "2", <DesktopOutlined />),
];

const App = (params) => {
  const onClick = (e) => {
  };

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
