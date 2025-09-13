import React from "react";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="pt-16"> {/* pt-16 to avoid header overlap */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
