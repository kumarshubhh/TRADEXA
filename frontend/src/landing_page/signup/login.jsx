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
          withCredentials: true, // Include cookies/sessions
          headers: {
            "Content-Type": "application/json", // Set appropriate headers
          },
        }
      );

      if (response.status === 200) {
        console.log("Login successful!", response.data);
        
        // Redirect to the dashboard using backend-sent URL
        window.location.href = response.data.redirectUrl || "http://localhost:5174/";
      }
    } catch (err) {
      console.error("Login error:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#007BFF" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img
                          src="media/images/logoTradex.webp"
                          style={{ width: "12%", borderRadius: "50%" }}
                          alt=""
                        />{" "}
                        &nbsp;
                        <span className="h1 fw-bold mb-0" style={{ color: "#007BFF" }}>
                          TRADEXA
                        </span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          required
                        />
                        <label className="form-label" htmlFor="email">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          required
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="/signup" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
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
