import React from 'react';
import "../styles/Signup.css";

function Signup() {
  return (
    <React.Fragment>

      <div className="signuppage-content">
        <section>
          <div>
            <h1>Join 3QQ</h1>
            <h5>Please enter your data</h5>
          </div>

          {/* Login Form */}
          <form>
            {/* Username Input */}
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <div className="input-container">
                <input type="text" id="username" name="username" required />
              </div>
            </div>

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

            {/* Submit Button and Login Link */}
            <div className="login-actions">
              <button type="submit" className="login-btn">JOIN</button>
              <a href="/login" className="signup-link">Already have an account? Log in</a>
            </div>
            
          </form>
        </section>
      </div>

    </React.Fragment>
  );
}

export default Signup;
