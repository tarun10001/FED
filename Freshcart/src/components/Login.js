import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginStyle } from "../Styled-Components/LoginStyle";

const Login = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.name === loggedInUser.name &&
      input.password === loggedInUser.password
    ) {
      navigate("/");
    } else {
      alert("Wrong Credentials");
    }
  };
  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <LoginStyle>
      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" onSubmit={handleLogin}>
            <span>Login</span>
            <input
              type="text"
              placeholder="Username"
              required
              name="name"
              value={input.name}
              onChange={handleInput}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
            <input type="submit" value="Submit" />
            <p>
              Not a user ? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </LoginStyle>
  );
};

export default Login;
