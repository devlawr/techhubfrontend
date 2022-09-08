import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import * as emailjs from "emailjs-com";
import { contactConfig } from "../../content_option";
import { toast } from "react-toastify";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
  });

  const handleSubmit = (values) => {
    setFormdata(values, {
      message: "",
      loading: false,
      show: false,
      alertmessage: "",
    });

    setFormdata({ loading: true });
    const templateParams = {
      from_name: values.user.name,
      user_name: values.user.email,
      to_name: contactConfig.YOUR_EMAIL,
      message: values.user.Message,
    };
    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          setFormdata({
            loading: false,
          
            variant: "success",
            show: true,
          });
          if (result) {
            
            toast.success("SUCCESS! ,Thankyou for your message", {
              position: "bottom-center",
            });
          }
        },
        (error) => {
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          
          if (error) {
            toast.warn(`Faild to send! ${error.text}`, { position: "bottom-center" });
          }
        }
      );
  };

  return (
    <>
      {formData.loading ? (
        <div className="spinner">{<ClipLoader color="#6ed8af" />}</div>
      ) : null}

      <div>
        <p style={{color:'red', textAlign:'center',fontWeight:'bold',paddingLeft:'10%'}}>
          Kindly Drop a message and we'll respond to you as soon as posible or
          call us on {contactConfig.YOUR_FONE}
        </p>
      </div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={handleSubmit}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={["user", "Message"]} label="Message">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            {formData.loading ? "Sending..." : "Send"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactUs;
