import { Layout, Menu } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Router from "../router";
const { Header, Content, Footer, Sider } = Layout;

const Wrapper = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    {
      key: "/dashboard",
      label: "Dashboard",
      onClick: () => navigate("/"),
    },
    {
      key: "/post_management",
      label: "Posts Management",
      onClick: () => navigate("/post_management"),
    },
    {
      key: "/settings",
      label: "Settings",
      onClick: () => navigate("/settings"),
    },
  ];

  const pageTitle = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/post_management": "Posts Management",
    "/settings": "Settings",
  };

  return (
    <Layout
      style={{
        height: "100svh",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          selectedKeys={
            pathname === "/" || pathname?.includes("dashboard")
              ? "/dashboard"
              : pathname
          }
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "white",
          }}
          children={
            <h2 style={{ margin: 0, paddingLeft: 20 }}>
              {pageTitle[pathname]}
            </h2>
          }
        />

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Router />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Wrapper;
