import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/anime'><li>Anime</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/shop'><li>Shop</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
          <Link to='/product'><li>Product</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default navbar