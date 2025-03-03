import React, { useEffect } from "react";
import axios from "./axiosInstance"; // Ensure axios is properly configured
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axios.post("https://tradexabackend.onrender.com/logout", {}, { withCredentials: true });
        console.log("User logged out successfully");
        navigate("/login"); // Redirect to login page after logout
      } catch (error) {
        console.error("Logout error:", error.response?.data?.message || error.message);
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="container text-center mt-5">
      <h2>Logging Out...</h2>
    </div>
  );
};

export default Logout;
