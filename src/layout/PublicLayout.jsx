import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
