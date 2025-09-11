import React, { useState, useEffect } from "react";
import AuthPage from "./pages/AuthPage";
import Routes from "./Routes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsAuthenticated(true);
  }, []);

  return isAuthenticated ? (
    <Routes />
  ) : (
    <AuthPage onAuthSuccess={() => setIsAuthenticated(true)} />
  );
}

export default App;
