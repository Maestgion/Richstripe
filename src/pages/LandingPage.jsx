import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="h-[90vh] flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-8 text-white text-center w-[100%]">
            <p className="font-extrabold text-6xl " >Unlimited movies, TV shows and more</p>
            <p className="text-xl ">
            Watch anywhere. Cancel anytime.
            </p>
            <p className="text-lg">
            Ready to watch? Create an account to start your membership.
            </p>
        </div>

        <div>
           
           <Link to="/signup">
           <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-4 px-10 font-bold text-2xl">
              Get Started
            </button>
           </Link>
          </div>
        </div>
 
    </>
  );
};

export default LandingPage;
