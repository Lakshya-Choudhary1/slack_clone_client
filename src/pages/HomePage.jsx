import React , {useState} from 'react'
import {UserProfile,SignOutButton,getToken,UserButton} from "@clerk/react";

import axios from "axios";

const check_auth = async() =>{

  const token = await getToken();
  let url = "http://localhost:3000/protected";

  if(import.meta.env.Mode === 'production'){
    url = "https://slack-clone-server-3gxm.onrender.com/protected";
  }

  const res = await axios.get(url,{
    headers:{
      Authorization : `Bearer ${token}`
    } ,
    withCredentials:true
  })

  console.log(res.data)
}

const HomePage = () => {


  return (
    <>
      <h1>home page</h1>

      <button onClick={check_auth}>get user</button>

      <UserButton className="m-auto" />
      <br />

      <SignOutButton />

    </>
  )
}

export default HomePage;