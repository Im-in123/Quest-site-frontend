
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
 import Signup from "./pages/signup/Signup"
 import Signin from "./pages/signin/Signin"
 


const Router = () => {
  return (
             <BrowserRouter >

        <Header/>
    <Routes>
    {/* <Route path="/" element={<AuthController><Landing /></AuthController>} exact/> */}
      <Route
        path="signin"
        element={<Signin />} exact
      />
      <Route path="/signup" element={<Signup />} exact />
      {/* <Route path="/form" element={ <AuthController><Form /></AuthController>} exact /> */}
 
   </Routes>
   </BrowserRouter>
   )
}

export default Router
