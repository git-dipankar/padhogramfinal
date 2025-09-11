import React, { useState } from "react";

export default function AuthPage({ onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateSignUp = () => {
    const newErrors = {};
    if (!signupName) newErrors.signupName = "Name is required";
    if (!signupEmail) newErrors.signupEmail = "Email is required";
    else if (!isValidEmail(signupEmail))
      newErrors.signupEmail = "Invalid email format";
    if (!signupPassword) newErrors.signupPassword = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignIn = () => {
    const newErrors = {};
    if (!signinEmail) newErrors.signinEmail = "Email is required";
    else if (!isValidEmail(signinEmail))
      newErrors.signinEmail = "Invalid email format";
    if (!signinPassword) newErrors.signinPassword = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validateSignUp()) {
      localStorage.setItem("user", JSON.stringify({ email: signupEmail }));
      onAuthSuccess();
    }
  };

  const handleSignIn = () => {
    if (validateSignIn()) {
      localStorage.setItem("user", JSON.stringify({ email: signinEmail }));
      onAuthSuccess();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex">
        
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full p-8 transition-transform duration-500 ${
            isSignUp ? "translate-x-full z-10" : "z-0"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Create Account</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />
          {errors.signupName && <p className="text-red-500 text-sm mb-2">{errors.signupName}</p>}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          {errors.signupEmail && <p className="text-red-500 text-sm mb-2">{errors.signupEmail}</p>}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          {errors.signupPassword && <p className="text-red-500 text-sm mb-2">{errors.signupPassword}</p>}
          <button
            onClick={handleSignUp}
            className="w-full mt-4 p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full p-8 transition-transform duration-500 ${
            isSignUp ? "z-0" : "z-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={signinEmail}
            onChange={(e) => setSigninEmail(e.target.value)}
          />
          {errors.signinEmail && <p className="text-red-500 text-sm mb-2">{errors.signinEmail}</p>}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={signinPassword}
            onChange={(e) => setSigninPassword(e.target.value)}
          />
          {errors.signinPassword && <p className="text-red-500 text-sm mb-2">{errors.signinPassword}</p>}
          <button
            onClick={handleSignIn}
            className="w-full mt-4 p-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </div>

        {/* Toggle Panel */}
        <div className="w-1/2 bg-gradient-to-tr from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center p-8 relative z-20">
          <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
          <p className="mb-6">Switch between Sign In and Sign Up</p>
          <div className="flex gap-4">
            <button
              onClick={() => setIsSignUp(false)}
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
