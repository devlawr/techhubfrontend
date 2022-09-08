import { Button,
  //  message, 
   Steps } from "antd";
import React, { useState } from "react";
const { Step } = Steps;
const steps = [
  {
    title: "First",
    header: "Smart skill matching",
    content:
      "Our intuitive machine learning and AI platform finds you the best match for any role",
  },
  {
    title: "Second",
    header: "Meet the best talent",
    content:
      "Easily schedule interviews and meet top technologists that fit within your team",
  },
  {
    title: "Last",
    header: "Continued excellence",
    content:
      "Integrate your new team members quickly and effectively. Let us manage payroll and compliancet",
  },
];

const StepP = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current} className="steps" responsive>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        <h2> {steps[current].header}</h2>
        <p>{steps[current].content}</p>
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {/* {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("click the previous button !")}
          >
            Back
          </Button>
        )} */}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default StepP;
