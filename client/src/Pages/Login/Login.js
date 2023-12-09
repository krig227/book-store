import React, { useState } from "react";
import "./Index.css";
import loginImage from "../../images/Login-cover.png";
import loginWink from "../../images/LoginCoverWink.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Actions/authAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      // Save the JWT token to local storage
      localStorage.setItem("token", data.token);
      // If login is successful, redirect to the dashboard
      dispatch(login());
      navigate("/");
    } else {
      // Handle login failure (show error message, etc.)
      console.error(data.error);
    }
  };
  return (
    <div className="Login-Main-Container">
      <div className="Login-Container">
        <div className={`Login-Image ${isHovered ? "hovered" : ""}`}>
          <img
            className="Login-CoverImage"
            src={isHovered ? loginWink : loginImage}
            alt="Login-Cover"
          />
        </div>
        <div
          className="Login-Field-Container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="Login-Header">Welcome to Books & Smile</h3>
          <h4 className="Login-Text-header">Login</h4>

          <form onSubmit={handleSubmit} className="Input-Login-Form">
            <input
              className="Login-Email Input-Style"
              type="email"
              placeholder="Enter Your Email Id"
              onChange={handleEmailChange}
              required
            ></input>

            <input
              className="Login-Password Input-Style"
              type="password"
              placeholder="Enter Your Password"
              onChange={handlePasswordChange}
              required
            ></input>
            <Link className="Forgot-Login-Link">
              <p className="Forgot-Login">Forgot Password?</p>
            </Link>

            <p className="Terms-Login">
              By continuing, you agree to Books&Smile‘s Terms of Use and Privacy
              Policy.
            </p>
            <button className="Addtocart-Primary" type="submit">
              Login
            </button>
            <Link className="Signup-Link">
              <p>Not a member yet? Register now</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
