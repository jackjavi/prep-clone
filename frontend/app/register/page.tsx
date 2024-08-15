import React from "react";
import Navbar from "../(home)/Navbar";
import RegisterForm from "./RegisterForm";
import Footer from "@/app/Components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default page;
