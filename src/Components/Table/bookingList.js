import React, { useState, useEffect } from "react";
import axios from "axios";

import { Space, Table, Modal, Typography } from "antd";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../Components/common/common";
import { DeleteData } from "../../features/deleteSlice";
const { Paragraph } = Typography;
const { Column, ColumnGroup } = Table;

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
      .get(`${baseUrl}/booking/list`)
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
  const handleDeleteUser = (user) => {
    dispatch(DeleteData(user));
    window.location.reload(false);
  };
  return (
    <>
      <Table dataSource={result}>
        <ColumnGroup title="Name">
          <Column title="Name" dataIndex="firstname" key="firstname" />
        </ColumnGroup>
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
                <Paragraph>First Name: {details.firstname}</Paragraph>
                <Paragraph>last Name Name: {details.lastname}</Paragraph>
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
