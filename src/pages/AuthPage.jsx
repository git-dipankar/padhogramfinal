import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
      navigate("/home"); // redirect to main app page
    }
  };

  const handleSignIn = () => {
    if (validateSignIn()) {
      localStorage.setItem("user", JSON.stringify({ email: signinEmail }));
      navigate("/home"); // redirect to main app page
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Forms */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          {isSignUp ? (
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 mb-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />
              {errors.signupName && <p className="text-red-500 text-sm mb-2">{errors.signupName}</p>}
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 mb-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
              {errors.signupEmail && <p className="text-red-500 text-sm mb-2">{errors.signupEmail}</p>}
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 mb-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              {errors.signupPassword && <p className="text-red-500 text-sm mb-2">{errors.signupPassword}</p>}
              <button
                onClick={handleSignUp}
                className="mt-5 w-full p-4 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign In</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 mb-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                value={signinEmail}
                onChange={(e) => setSigninEmail(e.target.value)}
              />
              {errors.signinEmail && <p className="text-red-500 text-sm mb-2">{errors.signinEmail}</p>}
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 mb-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                value={signinPassword}
                onChange={(e) => setSigninPassword(e.target.value)}
              />
              {errors.signinPassword && <p className="text-red-500 text-sm mb-2">{errors.signinPassword}</p>}
              <button
                onClick={handleSignIn}
                className="mt-5 w-full p-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
              >
                Sign In
              </button>
            </div>
          )}
        </div>

        {/* Toggle Panel */}
        <div className="w-full md:w-1/2 bg-gradient-to-tr from-purple-700 to-pink-500 text-white flex flex-col justify-center items-center p-10">
          <h2 className="text-3xl font-bold mb-4">
            {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <p className="mb-6 text-center">
            {isSignUp
              ? "Sign in to continue to your account"
              : "Create an account to get started"}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
