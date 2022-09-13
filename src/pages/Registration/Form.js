import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/regSlice";
import { resetState } from "../../features/regSlice";


const RegistrationForm = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    if (auth?.registerStatus === "success") {
      navigate("/");
      dispatch(resetState());
    }

  }, [dispatch, auth?.registerStatus, navigate]);

  const handleSubmit = (values) => {
    dispatch(registerUser(values))
  };


  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      // onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <Form.Item
        label="Firstname"
        name="firstname"
        rules={[
          {
            required: true,
            message: "Please input your first name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="LastName"
        name="lastname"
        rules={[
          {
            required: true,
            message: "Please input your Last Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mobile"
        name="mobile"
        rules={[
          {
            required: true,
            message: "Please input your Mobile!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country"
        rules={[
          {
            required: true,
            message: "Please input your Country!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <p>
        <span style={{ color: "red" }}> preference: </span>Virtual and physical
        class?
      </p>
      <Form.Item
     
        name="prefference"
       label="preference"
        style={{

        }}
        rules={[
          {
            required: true,
            message: "Please input your preference!",
          },
        ]}
      >
        <Input />
      </Form.Item>
   

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => dispatch()}
          style={{
            marginBottom: "50px",
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
