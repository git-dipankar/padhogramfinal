import React, { useState } from "react";

export default function AuthPage({ onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = () => {
    if (!signupName || !signupEmail || !signupPassword) {
      alert("Please fill all fields to sign up!");
    } else if (!isValidEmail(signupEmail)) {
      alert("Please enter a valid email!");
    } else {
      alert("Sign Up Successful!");
      localStorage.setItem("user", JSON.stringify({ email: signupEmail }));
      onAuthSuccess();
    }
  };

  const handleSignIn = () => {
    if (!signinEmail || !signinPassword) {
      alert("Please enter your email and password!");
    } else if (!isValidEmail(signinEmail)) {
      alert("Please enter a valid email!");
    } else {
      alert("Sign In Successful!");
      localStorage.setItem("user", JSON.stringify({ email: signinEmail }));
      onAuthSuccess();
    }
  };

  return (
    <div className={`container ${isSignUp ? "active" : ""}`} id="container">
      {/* Sign Up */}
      <div className="form-container sign-up">
        <div className="form-box">
          <h2>Create Account</h2>
          <input
            type="text"
            placeholder="Name"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>

      {/* Sign In */}
      <div className="form-container sign-in">
        <div className="form-box">
          <h2>Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            value={signinEmail}
            onChange={(e) => setSigninEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={signinPassword}
            onChange={(e) => setSigninPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </div>

      {/* Toggle */}
      <div className="toggle-container">
        <div className="form-box">
          <h2>Welcome!</h2>
          <p>Switch between Sign In and Sign Up</p>
          <button onClick={() => setIsSignUp(false)}>Sign In</button>
          <button onClick={() => setIsSignUp(true)}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
