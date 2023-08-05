import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalPage from './pages/GlobalPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import LandingPage from './pages/LandingPage'
import SignupStart from './components/SignupStart'


const App = () => {
  const user = true;
  return (
    <BrowserRouter>
    {
      !user ? (<LoginPage/>) : (
        <Routes>
        <Route path="/" element={<GlobalPage/>}>
        <Route index  element ={<LandingPage/>} />
        <Route path="/signup" element={<SignupStart/>} >

        <Route path="planform" element={<SignupPage/>} />

        <Route path="registration" element={<SignupPage/>} />
        <Route path="regform" element={<SignupPage/>} />
        <Route path="paymentPicker" element={<SignupPage/>} />

        </Route>
        </Route>

        <Route path="/signin" element={<LoginPage/>} />
      </Routes>
      )
    }
   
    </BrowserRouter>

   
  )
}

export default App