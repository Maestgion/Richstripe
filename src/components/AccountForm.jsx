import { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountForm = ({ isLogin }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [checkme, setCheckme] = useState(false);

  return (
    <>
      <div className='h-[90vh]  flex justify-center items-center'>
        <div className='flex flex-col text-white justify-center items-center gap-14 w-[25%] '>
          {/* head */}
          <div>
            <p className='text-4xl font-bold text-center'>
              {!isLogin ? "Create account" : "Login to your account"}
            </p>
          </div>

          {/* form */}
          <form className='w-[100%]'>
            <div className='flex flex-col gap-8 justify-center items-center w-full'>
              <input
                type="text"
                className='outline-none bg-transparent border py-3 px-2 w-full rounded-md'
                placeholder='Name'
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <input
                type="email"
                className='outline-none bg-transparent border py-3 px-2 w-full rounded-md'
                placeholder='Email'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              {!isLogin && (
                <input
                  type="password"
                  className='outline-none bg-transparent border py-3 px-2 w-full rounded-md'
                  placeholder='Password'
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
              )}

              <label className='w-full flex center justify-start text-lg gap-2'>
                <input
                  type="checkbox"
                  checked={checkme}
                  onChange={() => setCheckme(!checkme)}
                />
                <p>Remeber Me</p>
              </label>
            </div>
          </form>

          {/* button */}
          <div className='w-[100%]'>
            <Link to="/signup">
              <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-4 px-10 text-2xl w-[100%]">
                {!isLogin ? "Sign up" : "Sign in"}
              </button>
            </Link>
          </div>

          {/* disclaimer */}
          <div>
           {
            !isLogin?( <p className='text-lg tracking-wider'>
            Already have an account?{" "}
            <span className='text-[#004E96] font-bold'>
              <Link to="/">Login</Link>
            </span>
          </p>) : (<p className='text-lg tracking-wider'>
            New to MyApp?{" "}
            <span className='text-[#004E96] font-bold'>
              <Link to="/signup/regform">Sign Up</Link>
            </span>
          </p>)
           }
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountForm;
