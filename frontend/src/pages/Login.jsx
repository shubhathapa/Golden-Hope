import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://golden-hope-1.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        
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