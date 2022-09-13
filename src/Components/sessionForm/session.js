import { Button, Form, Input, Typography } from "antd";
import { registerSession } from "../../features/sessionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { resetState } from "../../features/sessionSlice";

const { Title } = Typography;

const SessionForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector((state) => state.session);

  const handleSubmit = (values) => {
    dispatch(registerSession(values));
  };
  useEffect(() => {
    if (session?.registerStatus === "rejected") {
      toast.warn(session?.registerError?.data?.error, {
        position: "bottom-center",
      });
    }
    if (session?.registerStatus === "fulfilled") {
      toast.success(
        "session successfully booked, kindly expect an email soon",

        {
          position: "bottom-center",
        }
      );
      navigate("/");
      dispatch(resetState(null));
    }
  }, [
    session?.registerStatus,
    session?.registerError?.data?.error,
    navigate,
    dispatch,
  ]);

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
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <Title>Book a free session now!</Title>
        <div>
          {session?.registerStatus === "pending" ? (
            <ClipLoader color="#6ed8af" />
          ) : null}
        </div>
      </div>
   
      <div
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "40px",
          paddingRight: "100px",
        }}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={handleSubmit}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="mobile" label="Mobile">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Book Session
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SessionForm;
