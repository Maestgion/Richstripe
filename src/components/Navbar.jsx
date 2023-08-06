import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signout } from "../store/slices/userSlice";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate()
  const [signin, setSignin] = useState(true)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const handleLogout = async ()=> {
        try{
            await signOut(auth)
            dispatch(signout)
            setSignin(false)
            navigate('/')
            console.log(user)
        }catch(err)
        {
            console.error(err)
        }
    }

  return (
    <>
      <div className="h-[10vh] flex justify-between items-center mx-[10vw] ">
        <div className="flex items-center ">
          <img src={logo} className="w-[5vh]  " />
          <p className="text-[#004E96] text-3xl font-bold  pl-2">Richstripe</p>
        </div>

        <div>
          {
            signin ? (
            <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-2 px-6 " onClick={handleLogout}>
              Sign out
            </button>
          ) :( <Link to="/signin">
          <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-2 px-6">
            Sign in
          </button>
        </Link>)
          }

{/* <Link to="/signin">
          <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-2 px-6">
            Sign in
          </button>
        </Link>
           */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
