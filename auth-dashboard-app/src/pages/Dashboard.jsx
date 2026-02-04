import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/dashboard.scss";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container dashboard">
      <h2>Dashboard</h2>

      <p>
        Welcome <strong>{user?.name || user?.email}</strong> 👋
      </p>

      <p>You are successfully logged in.</p>
    </div>
  );
};

export default Dashboard;
