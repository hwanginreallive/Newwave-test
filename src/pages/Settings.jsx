import { Button, ColorPicker, DatePicker, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useState } from "react";

const defaultValues = {
  active_date: "",
  email: "",
  background: "",
  title: "",
};

const Settings = () => {
  const [form] = useForm();
  const [isDirty, setIsDirty] = useState(false);

  const handleSubmit = (values) => {
    console.log("values", {
      ...values,
      background: values.background.toHexString(),
    });
  };

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
        onFieldsChange={(values) => {
          const isFieldGotValue = values?.some((item) => item?.value);
          if (!isFieldGotValue || !isDirty) {
            setIsDirty(isFieldGotValue);
          }
        }}
        initialValues={defaultValues}
      >
        <Form.Item
          name={"title"}
          label="Title:"
          rules={[
            {
              required: true,
              message: "Title is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"email"}
          label="Email:"
          rules={[
            {
              required: true,
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"background"}
          label="Background color:"
          rules={[
            {
              required: true,
              message: "Background color is required",
            },
          ]}
        >
          <ColorPicker showText allowClear />
        </Form.Item>
        <Form.Item
          name={"active_date"}
          label="Active date:"
          rules={[
            {
              required: true,
              message: "Active date is required",
            },
          ]}
        >
          <DatePicker.RangePicker
            format="DD/MM/YYYY"
            style={{ width: "100%" }}
          />
        </Form.Item>
        {isDirty && (
          <Button htmlType="submit" style={{ marginTop: 20, width: 100 }}>
            Save
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Settings;
