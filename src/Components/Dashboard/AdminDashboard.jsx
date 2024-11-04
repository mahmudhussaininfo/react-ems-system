import React, { useContext } from "react";
import Header from "../Header/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";
import { authContext } from "../../Context/AuthContext";

const AdminDashboard = ({ changeUser }) => {
  const authData = useContext(authContext);

  return (
    <>
      <div className="p-7 h-screen w-full">
        <Header change={changeUser} />
        <CreateTask />
        <AllTask data={authData} />
      </div>
    </>
  );
};

export default AdminDashboard;
