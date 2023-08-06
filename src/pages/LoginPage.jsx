import {useEffect, useState} from 'react'
import AccountForm from "../components/AccountForm"

const LoginPage = () => {

  return (
    <>
    <div className='bg-[#0F1014]'>
    <AccountForm isLogin={true}/>
    </div>
    </>
  )
}

export default LoginPage