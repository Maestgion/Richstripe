import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalPage from "./pages/GlobalPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import SignupStart from "./components/SignupStart";
import Planform from "./components/Planform";
import Register from "./components/Register";
import AccountForm from "./components/AccountForm";

const App = () => {
  const user = true;
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
