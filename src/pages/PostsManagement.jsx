import { Button, Modal, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
const PostsManagement = () => {
  const [dataPosts, setDataPosts] = useState(null);
  const [dataUsers, setDataUsers] = useState(null);
  const [postSelected, setPostSelected] = useState(null);

  const handleGetData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    if (res.status === 200) {
      setDataPosts(res.data);
    }
  };

  const handleGetUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (res.status === 200) {
      const convertData = res.data?.map((item) => ({
        text: item?.id,
        value: item?.id,
      }));
      setDataUsers(convertData);
    }
  };

  const showModal = (user) => {
    setPostSelected(user);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setPostSelected(null);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "User ID",
      dataIndex: "userId",
      filters: dataUsers,
      onFilter: (value, record) => record?.userId === value,
      sorter: (a, b) => a.userId - b.userId,
    },
    {
      title: "Tittle",
      dataIndex: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_text, record) => {
        return (
          <Button onClick={() => showModal(record)}>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              width="1em"
              height="1em"
              fill="currentColor"
            >
              <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
            </svg>
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    handleGetData();
    handleGetUsers();
  }, []);

  return (
    <div style={{ paddingTop: 20, margin: "auto" }}>
      <Table
        columns={columns}
        dataSource={dataPosts}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
        rowKey={"id"}
        scroll={{
          y: "72vh",
        }}
        bordered
      />
      <Modal
        open={!!postSelected}
        title="Detail post"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <strong>User Id:</strong> {postSelected?.userId}
          </div>
          <div>
            <strong>Tittle:</strong> {postSelected?.title}
          </div>{" "}
          <div>
            <strong>Body:</strong> {postSelected?.body}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PostsManagement;
