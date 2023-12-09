import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="h-screen mx-6">
      <div className="flex flex-col justify-center items-center h-full p-auto mt-4 sm:mt-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Setting up your way to success
        </h1>
        <p className="text-l md:text-xl text-center p-2">
          One-stop shop for business setup services in Saudi Arabia and the UAE,
          powered by ChatGPT.
        </p>
        <div className="pt-5 lg:pt-8">
        <Link to='/contact' className="p-3 bg-darkblue text-white rounded-md">
            Connect with us
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default Hero;
