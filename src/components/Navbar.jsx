import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-[10vh] flex justify-between items-center mx-[10vw] ">
        <div className="flex items-center ">
          <img src={logo} className="w-[5vh]  " />
          <p className="text-[#004E96] text-3xl font-bold  pl-2">Richstripe</p>
        </div>

        <div>
          <Link to="/signin">
            <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-2 px-6">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
