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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x p-6">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex transition-all duration-700 flex-col md:flex-row">
        
        {/* Sign In Form */}
        <div
          className={`absolute top-0 left-0 w-full md:w-1/2 h-full p-12 transition-transform duration-700 ${
            isSignUp ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
          } flex flex-col justify-center`}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-5 mb-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-lg"
            value={signinEmail}
            onChange={(e) => setSigninEmail(e.target.value)}
          />
          {errors.signinEmail && <p className="text-red-500 text-sm mb-2">{errors.signinEmail}</p>}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-5 mb-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-lg"
            value={signinPassword}
            onChange={(e) => setSigninPassword(e.target.value)}
          />
          {errors.signinPassword && <p className="text-red-500 text-sm mb-2">{errors.signinPassword}</p>}
          <button
            onClick={handleSignIn}
            className="mt-6 w-full p-5 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition transform hover:scale-105 text-lg"
          >
            Sign In
          </button>
        </div>

        {/* Sign Up Form */}
        <div
          className={`absolute top-0 left-0 w-full md:w-1/2 h-full p-12 transition-transform duration-700 ${
            isSignUp ? "translate-x-0 opacity-100 z-20" : "translate-x-full opacity-0"
          } flex flex-col justify-center`}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Sign Up</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-5 mb-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-lg"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />
          {errors.signupName && <p className="text-red-500 text-sm mb-2">{errors.signupName}</p>}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-5 mb-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-lg"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          {errors.signupEmail && <p className="text-red-500 text-sm mb-2">{errors.signupEmail}</p>}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-5 mb-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-lg"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          {errors.signupPassword && <p className="text-red-500 text-sm mb-2">{errors.signupPassword}</p>}
          <button
            onClick={handleSignUp}
            className="mt-6 w-full p-5 bg-pink-600 text-white rounded-2xl hover:bg-pink-700 transition transform hover:scale-105 text-lg"
          >
            Sign Up
          </button>
        </div>

        {/* Toggle Panel */}
        <div className="w-full md:w-1/2 bg-gradient-to-tr from-purple-700 to-pink-500 text-white flex flex-col justify-center items-center p-12 transition-all duration-700">
          <h2 className="text-4xl font-bold mb-6 text-center">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h2>
          <p className="mb-8 text-center text-lg">{isSignUp ? "Sign in to continue" : "Create an account to get started"}</p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition transform hover:scale-105 text-lg"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>

      {/* Tailwind gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease infinite;
        }
      `}</style>
    </div>
  );
}
