import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { LanguageContext } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import "../styles/login.unique.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!name || !password) {
      alert("Please enter name and password");
      return;
    }

    const success = login(name, password);
    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="risce-login-container">
        <h1 style ={{textAlign:"center"}}>RISCE - <h3> Satellite Crop Monitoring</h3></h1>
        <p style ={{textAlign:"center"}}>An end-to-end solution for farmers</p>
      <div className="risce-login-box">
        <h1>{t.login}</h1>

        <input
          type="text"
          placeholder={t.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder={t.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="risce-login-btn" onClick={handleLogin}>
          Login
        </button>

        <button
          className="risce-secondary-btn"
          onClick={() => navigate("/register")}
        >
          {t.register}
        </button>

        <button
          className="risce-secondary-btn"
          onClick={() => navigate("/dashboard")}
        >
          {t.guest}
        </button>

      </div>
    </div>
  );
};

export default Login;