import React from 'react'
import TopBar from './components/topbar/TopBar'
import Home from './components/pages/home/Home'
import Single from './components/pages/single/Single'
import Write from './components/pages/write/Write'
import Settings from './components/pages/settings/Settings'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  const user = true;
  return (
    <div className='container w-full overflow-hidden'>
    <TopBar/>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:postId" element={<Single/>} />
          <Route path="/write"    element={user ? <Write/> : <Register/>} />
          <Route path="/settings" element={user ? <Settings/> : <Register/>} />
          <Route path="/login"    element={user ? <Home/> : <Login/>} />
          <Route path="/register" element={user ? <Home/> : <Register/>} />
    </Routes>
    <Footer/> 
    </div>
  )
}

export default App