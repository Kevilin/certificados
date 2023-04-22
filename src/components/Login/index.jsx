import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/certificados/add");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container-login">
          <form onSubmit={handleSubmit} className="login-form">
            <span className="login-form-title">Acesso Admin</span>
            <br></br>
            <div className="wrap-input">
              <span className="spanLogin">E-mail</span>
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="wrap-input">
            <span className="spanLogin">Senha</span>
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
