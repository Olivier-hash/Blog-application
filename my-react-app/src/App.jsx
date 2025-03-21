import React from 'react'
import TopBar from './components/topbar/TopBar'
import Home from './components/pages/home/Home'
import Single from './components/pages/single/Single'
import Write from './components/pages/write/Write'
import Settings from './components/pages/settings/Settings'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import { Routes, Route, createBrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='' element={<TopBar/>}/>
      <Route path='' element={<Register/>}/> 
    </Routes>  
    </>
  )
}

export default App