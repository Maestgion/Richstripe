import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userSlice";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const user = useSelector(selectUser)

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out successfully.');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <>
      <div className="h-[10vh] flex justify-between items-center mx-[10vw] ">
        <div className="flex items-center ">
          <img src={logo} className="w-[5vh]  " />
          <p className="text-[#004E96] text-3xl font-bold  pl-2">Richstripe</p>
        </div>

        <div>
          {/* {
            user ? (
            <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-2 px-6 " onClick={handleLogout}>
              Sign out
            </button>
          ) :( <Link to="/signin">
          <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-2 px-6">
            Sign in
          </button>
        </Link>)
          } */}

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
