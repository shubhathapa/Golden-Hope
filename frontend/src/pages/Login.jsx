import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://golden-hope.onrender.com/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src="/golden_hope_logo.svg" alt="Golden Hope" className="login-logo" />
        <h1 className="login-title">✦ Welcome Back ✦</h1>
        <p className="login-sub">Sign in to your account</p>

        <div className="login-form">
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={handleLogin}>
            Sign In
          </button>
        </div>

        <p className="login-register">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
