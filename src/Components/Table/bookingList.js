import React, { useState, useEffect } from "react";
import axios from "axios";

import { Space, Table, Modal, Typography } from "antd";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../Components/common/common";
import { deleteSession } from "../../features/sessionSlice";
const { Paragraph } = Typography;
const { Column } = Table;

const UserTable = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datas, setDatas] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    axios
      .get(`${baseUrl}/session/list`)
      .then((res) => {
        setDatas(res);
      })
      .catch((error) => {
        console.log(error);
        setDatas(error);
      });
  }, []);

  let result = datas?.data?.payload;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDeleteUser = (value) => {
    dispatch(deleteSession(value));
    window.location.reload(false);
  };
  return (
    <>
      <Table dataSource={result} key = {result}>

          <Column title="Name" dataIndex="name" key="name" />
 
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Mobile" dataIndex="mobile" key="mobile" />
        <Column title="Country" dataIndex="country" key="country" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <p
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "green",
                }}
                onClick={() => showModal(setDetails(record))}
              >
                Details
              </p>
              <p
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "red",
                }}
                onClick={() => handleDeleteUser(record.email)}
              >
                Delete
              </p>

              <Modal
                title="full details"
                open={isModalOpen}
                onOk={handleOk}
                visible={isModalOpen}
                onCancel={handleCancel}
              >
                <Paragraph>Full Name: {details.name}</Paragraph>
                <Paragraph>Email: {details.email}</Paragraph>
                <Paragraph>Mobile: {details.mobile}</Paragraph>
                <Paragraph>Country: {details.country}</Paragraph>
              </Modal>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default UserTable;
