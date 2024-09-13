import { Button, DatePicker, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";

const Settings = () => {
  const [form] = useForm();

  const handleSubmit = (values) => {
    console.log("values", values);
  };
  console.log("form", form);
  return (
    <div style={{ margin: 50 }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{
          width: 800,
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          columnGap: "60px",
          rowGap: "20px",
        }}
      >
        <Form.Item name={"Title"} label="Title:">
          <Input />
        </Form.Item>
        <Form.Item name={"email"} label="Email:">
          <Input />
        </Form.Item>
        <Form.Item name={"background"} label="Background Color:">
          <Input />
        </Form.Item>
        <Form.Item name={"active_date"} label="Active date:">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Button htmlType="submit" style={{ marginTop: 20, width: 100 }}>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default Settings;
