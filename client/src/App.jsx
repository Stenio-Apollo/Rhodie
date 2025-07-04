import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div className="bg-[url('./src/assets/rhode.svg')] bg-no-repeat bg-cover bg-center h-screen w-screen">
      <Routes>
        
        <Route path="/" element={<HomePage />} />
    
        <Route path="/login" element={<LoginPage />} />
    
        <Route path="/profile" element={<ProfilePage />} />
    
    </Routes> 
    </div>
  )
}

export default App