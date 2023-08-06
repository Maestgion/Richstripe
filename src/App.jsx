import React, {useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalPage from "./pages/GlobalPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import SignupStart from "./components/SignupStart";
import Planform from "./components/Planform";
import Register from "./components/Register";
import AccountForm from "./components/AccountForm";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signIn, signOut } from "./store/slices/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
   const unsubscribe =   auth.onAuthStateChanged(userAuth=>{
      if(userAuth)
      { 
        dispatch(signIn({
          uid: userAuth?.uid,
          name: userAuth?.displayName,
          email: userAuth?.email,
         
        }))
        console.log(userAuth);
      }else{
        dispatch(signOut)
        console.log('No User');

      }
    })

    return unsubscribe
  }, [])
  
  return (
    <BrowserRouter>
      {!user ? (
        <LoginPage />
      ) : (
        <Routes>
        <Route path="/" element={<GlobalPage />}>
          <Route index element={<LandingPage />} />
          <Route path="signup" element={<SignupPage />}>
            <Route index element={<SignupStart />} />
            <Route path="planform" element={<Planform />} />
            <Route path="registration" element={<Register />} />
            <Route path="regform" element={<AccountForm/>} />
            <Route path="paymentPicker" element={<SignupPage />} />
          </Route>
        <Route path="/signin" element={<LoginPage />} />

        </Route>
      </Routes>

      )}
    </BrowserRouter>
    // <PricingTable/>
  );
};

export default App;
