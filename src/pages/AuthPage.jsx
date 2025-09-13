import React, { useState } from "react";

export default function AuthPage({ onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupName, setSignupName] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupOtp, setSignupOtp] = useState("");
  const [signinPhone, setSigninPhone] = useState("");
  const [signinOtp, setSigninOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);

  const isValidPhone = (phone) => /^\d{10}$/.test(phone);
  const isValidOtp = (otp) => /^\d{6}$/.test(otp);

  const validateSignUp = () => {
    const newErrors = {};
    if (!signupName) newErrors.signupName = "Name is required";
    if (!signupPhone) newErrors.signupPhone = "Phone number is required";
    else if (!isValidPhone(signupPhone))
      newErrors.signupPhone = "Phone number must be 10 digits";
    if (!signupOtp) newErrors.signupOtp = "OTP is required";
    else if (!isValidOtp(signupOtp))
      newErrors.signupOtp = "OTP must be 6 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignIn = () => {
    const newErrors = {};
    if (!signinPhone) newErrors.signinPhone = "Phone number is required";
    else if (!isValidPhone(signinPhone))
      newErrors.signinPhone = "Phone number must be 10 digits";
    if (!signinOtp) newErrors.signinOtp = "OTP is required";
    else if (!isValidOtp(signinOtp))
      newErrors.signinOtp = "OTP must be 6 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validateSignUp()) {
      localStorage.setItem(
        "user",
        JSON.stringify({ phone: signupPhone })
      );
      onAuthSuccess();
    }
  };

  const handleSignIn = () => {
    if (validateSignIn()) {
      localStorage.setItem(
        "user",
        JSON.stringify({ phone: signinPhone })
      );
      onAuthSuccess();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">

        {/* Forms */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center transition-all duration-500">
          {isSignUp ? (
            <>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />
              {errors.signupName && <p className="text-red-500 text-sm mb-2">{errors.signupName}</p>}
              
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={signupPhone}
                onChange={(e) => setSignupPhone(e.target.value)}
              />
              {errors.signupPhone && <p className="text-red-500 text-sm mb-2">{errors.signupPhone}</p>}

              <input
                type="text"
                placeholder="OTP"
                className="w-full p-4 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={signupOtp}
                onChange={(e) => setSignupOtp(e.target.value)}
              />
              {errors.signupOtp && <p className="text-red-500 text-sm mb-2">{errors.signupOtp}</p>}

              <button
                onClick={handleSignUp}
                className="mt-5 w-full p-4 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign In</h2>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={signinPhone}
                onChange={(e) => setSigninPhone(e.target.value)}
              />
              {errors.signinPhone && <p className="text-red-500 text-sm mb-2">{errors.signinPhone}</p>}

              <input
                type="text"
                placeholder="OTP"
                className="w-full p-4 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={signinOtp}
                onChange={(e) => setSigninOtp(e.target.value)}
              />
              {errors.signinOtp && <p className="text-red-500 text-sm mb-2">{errors.signinOtp}</p>}

              <button
                onClick={handleSignIn}
                className="mt-5 w-full p-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Toggle Panel */}
        <div className="w-full md:w-1/2 bg-gradient-to-tr from-purple-700 to-pink-500 text-white flex flex-col justify-center items-center p-10">
          <h2 className="text-3xl font-bold mb-4 text-center">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h2>
          <p className="mb-6 text-center">{isSignUp ? "Sign in to continue" : "Create an account to get started"}</p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>

      {/* Gradient animation */}
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
