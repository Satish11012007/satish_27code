import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  // 🔁 Restore login on refresh
  useEffect(() => {
    if (authData) {
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (storedUser) {
        setUser(storedUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    // ✅ Admin login
   
    if (email === "emp3@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      return;
    }

    // ✅ Employee login
    if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
        return;
      }
    }

    alert("Invalid Credentials");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard />}

      {user === "employee" && (
        <EmployeeDashboard data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
