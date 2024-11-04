import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import { GetLocalStorage, SetLocalStorage } from "./utils/LocalStorage";
import { authContext } from "./Context/AuthContext";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(authContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find(
        (data) => data.email === email && data.password === password
      )
    ) {
      setUser("Admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (data) => data.email === email && data.password === password
      );
      setUser("Employee");
      setLoggedInUser(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "Employee", data: employee })
      );
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "Admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "Employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUser} />
      ) : null}
    </>
  );
}

export default App;
