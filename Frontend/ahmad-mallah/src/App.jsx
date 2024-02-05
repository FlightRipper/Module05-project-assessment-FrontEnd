import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayAll from "./pages/displayAll";
import SignIn from './pages/signin';
import autheslice from "./Redux/autheslice";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const token = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<DisplayAll/>} />
          <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
