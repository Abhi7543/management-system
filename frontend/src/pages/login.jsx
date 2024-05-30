import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    // Simulated authentication
    const testEmail = "ttl@jsr.com";
    const testPassword = "t123";
    const testUser = "testUser";
    const token = "token";

    if (email === testEmail && password === testPassword) {
      // Successful login
      setUser({
        name: testUser,
        email: testEmail,
        token: token
      });
      setIsAuthenticated(true);
      toast.success("You have successfully logged in!", {});
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <img src="https://companieslogo.com/img/orig/TATAMOTORS.NS_BIG.D-38f66b91.png?t=1668176380" alt="Top Right" className="top-right-image" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="forgot-password-link">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;
