import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.unique.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    password: "",
    confirm: ""
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const submit = () => {
    
    if (!form.name || !form.address || !form.password || !form.confirm) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    
    alert("Registration successful");

    navigate("/");
  };

  return (
    <div className="risce-register-container">
      <div className="risce-register-box">

        <h1>Register as Farmer</h1>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={(e) => handleChange("confirm", e.target.value)}
        />

        <button className="risce-register-btn" onClick={submit}>
          Register
        </button>

      </div>
    </div>
  );
};

export default Register;