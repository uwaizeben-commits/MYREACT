import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/navbar'
import Home from './pages/Home/home'
import Anime from './pages/Anime/Anime'
import Shop from './pages/Shop/shop'
import About from './pages/About/About'
import Contact from './pages/Contact/contact'
import Product from './pages/Product/product'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anime' element={<Anime />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
