// src/pages/ForgotPassword.jsx

import React from 'react';

const ForgotPassword = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
