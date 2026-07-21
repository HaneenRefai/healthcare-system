import { useState } from "react";
import api from "../services/api";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/register", formData);

      alert(response.data.message);
      console.log(response.data);
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ width: "350px", margin: "50px auto" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <select name="role" onChange={handleChange}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="nurse">Nurse</option>
          <option value="receptionist">Receptionist</option>
          <option value="admin">Admin</option>
        </select>

        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;