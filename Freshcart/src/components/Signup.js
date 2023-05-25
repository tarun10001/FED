import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SignupStyled } from "../Styled-Components/SignupStyle";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };


  return (
    <SignupStyled>
      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" onSubmit={handleSubmit}>
            <span>Sign Up</span>

            <input
              type="text"
              placeholder="Username"
              name="name"
              value={input.name}    
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              required
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
              Already a User ? <Link to="/login">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </SignupStyled>
  );
};

export default Signup;
