import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/App'
import PaymentPage from './pages/Payment/App'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  )
}
