import './style.css'
import axios from 'axios'
import { useState, useEffect, use } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div className='home-container'>
      <h2>Welcome to OVER'S BLOG</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Numquam nihil rerum eius error voluptatem est dolorem commodi esse ex ipsa omnis quas, <br /> cum non dolorum hic deleniti nesciunt itaque nobis!</p>
      
      <Link to='/anime'>
        <button className='btn btn-primary'>See Characters</button>
      </Link>
    </div>
  )
}

export default Home
