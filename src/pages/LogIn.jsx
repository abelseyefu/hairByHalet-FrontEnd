import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../userServices";

const LogIn = ({ handleLogin }) => {
  const [formData, setFormData] = useState();
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userServices.logIn(formData);
      handleLogin();
      navigate('/home')
    } catch (err) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="Email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="Email"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
          <div id="Email" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div class="mb-3">
          <label for="Password" class="form-label">
            Password
          </label>
          <input
            type="Password"
            class="form-control"
            id="Password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
