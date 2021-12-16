import React from "react";
import Head from "next/head";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const PageWrapper = ({ children }) => {
  return (
    <div className="font-custom flex flex-col w-full h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 text-gray-800 dark:text-white">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageWrapper;
