import React, { useState } from "react";
import axios from "./axiosInstance"; // Axios instance with withCredentials: true
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
      const response = await axios.post("https://tradexabackend.onrender.com/signup", formData);

      if (response.status === 200) {
        console.log("Signup successful, navigating to dashboard...");
        if (response.data.redirectUrl) {
          window.location.href = response.data.redirectUrl; // Redirect to external dashboard
        } else {
          navigate("/dashboard"); // Default redirect if no URL provided
        }
      }
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Something went wrong.");
      } else {
        setError("Failed to connect to the server.");
      }
    }
  };

  return (
    <section className="d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          {/* Left Image Column */}
          <div className="col-lg-6 col-md-8 d-none d-md-block text-center">
            <img
              src="https://signup.zerodha.com/assets/landing-DQ76ex-B.svg"
              className="img-fluid"
              alt="Phone"
              style={{ maxWidth: "80%" }}
            />
          </div>

          {/* Signup Form Column */}
          <div className="col-lg-5 col-md-8">
            <div className="card shadow p-4">
              <h3 className="text-center mb-4">Sign Up</h3>
              <form onSubmit={handleSubmit}>
                {/* Name input */}
                <div className="form-group mb-3">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Email input */}
                <div className="form-group mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Password input */}
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Remember Me */}
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Remember me</label>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary w-100">
                  Sign up
                </button>

                {error && <p className="text-danger mt-3">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
