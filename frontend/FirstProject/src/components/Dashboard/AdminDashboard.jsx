import React from "react";
import Header from "../other/Header.jsx";
import CreateTask from "../other/CreateTask.jsx";
import AllTask from "../other/AllTask.jsx";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10 bg-[#121212] text-white">
      <h1 className="text-2xl mb-4">Admin Dashboard</h1>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
