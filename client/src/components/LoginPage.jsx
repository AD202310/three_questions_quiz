import React from 'react';
import "../styles/LoginPage.css";

function LoginPage() {
  return (
    <React.Fragment>

      <div className="loginpage-content">
        <section>
          <div>
            <h1>3QQ account</h1>
            <h5>Please log in to continue</h5>
          </div>

          {/* Login Form */}
          <form>
            {/* Email Address Input */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <div className="input-container">
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-container">
                <input type="password" id="password" name="password" required />
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="form-group checkbox-container">
              <label className="checkbox-label">
                <input type="checkbox" name="remember-me" id="remember-me" />
                <span className="remember-me">Remember me</span>
              </label>
            </div>

            {/* Submit Button and New User Link */}
            <div className="login-actions">
              <button type="submit" className="login-btn">SIGN IN</button>
              <a href="/signup" className="signup-link">New user? Sign up</a>
            </div>
            
          </form>
        </section>
      </div>

    </React.Fragment>
  );
}

export default LoginPage;
