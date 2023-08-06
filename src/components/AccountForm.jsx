import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const AccountForm = ({ isLogin }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [checkme, setCheckme] = useState(false);




  const handleSignUp=async (e)=>{
    navigate('/signup/planform')
    e.preventDefault()
    try{
      const userCredentials = await createUserWithEmailAndPassword(auth, user.email, user.password)
      console.log(userCredentials)

      await updateProfile(userCredentials.user, {
        displayName: user.name,
      })

      }catch(error)
      {
          alert(error.message)
      }
  }

  const handleSignIn = async (e)=>{
    e.preventDefault();
    try{
      const user = await signInWithEmailAndPassword(auth, user.email, user.password)
      console.log(user)

      }catch(error)
      {
          alert(error.message)
      }
  }

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
          <form   className='w-[100%]'>
            <div className='flex flex-col gap-8 justify-center items-center w-full'>
             {
              !isLogin && ( <input
                type="text"
                className='outline-none bg-transparent border py-3 px-2 w-full rounded-md'
                placeholder='Name'
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />)
             }
              <input
                type="email"
                className='outline-none bg-transparent border py-3 px-2 w-full rounded-md'
                placeholder='Email'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
       
                <input
                  type="password"
                  className='outline-none bg-transparent border py-3 px-2 w-full rounded-md'
                  placeholder='Password'
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
                />
         

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
            <Link to="/signup/planform">
              <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-4 px-10 text-2xl w-[100%]" type="submit" onClick={!isLogin?handleSignUp:handleSignIn}>
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
              <Link to="/signin">Login</Link>
            </span>
          </p>) : (<p className='text-lg tracking-wider'>
            New to MyApp?{" "}
            <span className='text-[#004E96] font-bold'>
              <Link to="/signup">Sign Up</Link>
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
