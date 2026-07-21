import { Navigate } from "react-router-dom";

function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Healthcare Dashboard</h1>

      <h2>Welcome, {user?.name}</h2>

      <p>Email: {user?.email}</p>

      <p>Role: {user?.role}</p>

      <br />

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;