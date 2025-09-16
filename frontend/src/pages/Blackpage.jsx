import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // check if user has token
    const token = localStorage.getItem("access");
    if (!token) {
      navigate("/"); // redirect back to login if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("access"); // clear token
    navigate("/"); // go back to login
  };

  return (
    <div
      style={{
        background: "black",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        gap: "1rem",
      }}
    >
      🎉 Welcome to the Black Page
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default BlackPage;