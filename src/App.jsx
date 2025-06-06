import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BirthdayWishes from './components/Birthdaywishes.jsx'
import Bapp from './components/Bapp.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bapp />} />
        <Route path="/birthday-wishes" element={<BirthdayWishes />} />
      </Routes>
    </Router>
  )
}

export default App
