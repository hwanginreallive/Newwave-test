import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PostsManagement from "../pages/PostsManagement";
import Settings from "../pages/Settings";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/post_management" element={<PostsManagement />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Router;
