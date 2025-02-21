
import React, { useState } from "react";
// axios instance with withCredentials:true
import axios from "./axiosInstance";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      // Send signup request to the backend
      const response = await axios.post("http://localhost:3001/signup", formData);

      if (response.status === 200) {
        console.log("Signup successful, navigating to dashboard...");
        if (response.data.redirectUrl) {
          window.location.href = response.data.redirectUrl; // Redirect to external dashboard
        } else {
          navigate("/dashboard"); // Default redirect if no URL provided
        }
      }
    } catch (error) {
      // Handle errors and set error message
      console.error("Signup error:", error);
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Something went wrong.");
      } else {
        setError("Failed to connect to the server.");
      }
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://signup.zerodha.com/assets/landing-DQ76ex-B.svg"
              className="img-fluid"
              alt="Phone"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              {/* Name input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  id="form1Example01"
                  className="form-control form-control-lg"
                  required
                />
                <label className="form-label" htmlFor="form1Example01">
                  Full Name
                </label>
              </div>

              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="form1Example13"
                  className="form-control form-control-lg"
                  required
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="form1Example23"
                  className="form-control form-control-lg"
                  required
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    Remember me
                  </label>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign up
              </button>

              {error && <p className="text-danger mt-3">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
