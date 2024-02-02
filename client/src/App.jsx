import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signup from './pages/Signup'
import About from './pages/About'
import Sign from './pages/Sign'

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/About" element = {<About/>}/>
        <Route path="/sign-in" element = {<Sign/>}/>
        <Route path="/sign-up" element = {<Signup/>}/>
        <Route path="/Projects" element = {<Projects/>}/>
        <Route path="/Dashboard" element = {<Dashboard/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
