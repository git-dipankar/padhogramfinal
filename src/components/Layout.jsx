import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="pt-16">{children}</main> {/* pt-16 to prevent header overlap */}
    </div>
  );
};

export default Layout;
