import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
      <Link to="/cart">
        <span>
          Cart
        </span>
      </Link>
    </nav>    
  )
}
