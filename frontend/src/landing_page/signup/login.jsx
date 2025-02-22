import React, { useState } from "react";
import axios from "./axiosInstance"; // Ensure you have an axios instance configured
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3001/login", // Ensure this points to the full backend URL
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        console.log("Login successful!", response.data);
        window.location.href = response.data.redirectUrl || "http://localhost:5174/";
      }
    } catch (err) {
      console.error("Login error:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <section className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: "#007BFF" }}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-10">
            <div className="card shadow-lg" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                {/* Left Side Image */}
                <div className="col-md-6 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem", objectFit: "cover", height: "100%" }}
                  />
                </div>

                {/* Right Side Form */}
                <div className="col-md-6 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      {/* Logo & Heading */}
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img
                          src="media/images/logoTradex.webp"
                          style={{ width: "12%", borderRadius: "50%" }}
                          alt="Tradexa"
                        />
                        &nbsp;
                        <span className="h1 fw-bold mb-0" style={{ color: "#007BFF" }}>
                          TRADEXA
                        </span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        Sign into your account
                      </h5>

                      {/* Email Input */}
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

                      {/* Password Input */}
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

                      {/* Login Button */}
                      <div className="pt-1 mb-3">
                        <button className="btn btn-primary w-100" type="submit">
                          Login
                        </button>
                      </div>

                      {/* Links */}
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="/signup" style={{ color: "#007BFF" }}>
                          Register here
                        </a>
                      </p>

                      <a href="#!" className="small text-muted">
                        Terms of use
                      </a>{" "}
                      |{" "}
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>

                    {/* Error Message */}
                    {error && <p className="text-danger mt-3">{error}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
