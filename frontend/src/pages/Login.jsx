import React, { useState } from 'react';
import './login.css';
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const toggleMode = () => setIsLogin((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // 🔹 LOGIN (send email + password)
      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,      // ✅ fixed: use email instead of username
          password: formData.password,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        // If you add JWT later, store tokens here
        // localStorage.setItem("access", data.access);
        // localStorage.setItem("refresh", data.refresh);
        navigate("/black");
      } else {
        alert("Invalid login credentials");
      }
    } else {
      // 🔹 SIGNUP (send username + email + password)
      const res = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.name,   // ✅ backend expects username field
          email: formData.email,
          password: formData.password,
        }),
      });

      if (res.ok) {
        navigate("/black");
      } else {
        alert("Signup failed");
      }
    }
  };

  return (
    <div className="login-page">
      <motion.div 
        className="login-box"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="toggle-tabs">
          <button 
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <h2>{isLogin ? 'Welcome Back' : 'Create Your Account'}</h2>
        <p>{isLogin ? 'Login to continue' : 'Sign up to get started'}</p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Full Name" 
              required 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          )}
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>

        <div className="divider">or continue with</div>

        <div className="social-icons">
          <FaGoogle className="icon" />
          <FaGithub className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;