import React, { useState } from 'react'
import { menuItems } from './constants'
import { Link } from 'react-router-dom'
import './styles/Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const logo = new URL('../../public/images/m.svg', import.meta.url)
  return (
    <nav className="navbar-container" id="top">
      <div>
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setToggle(!toggle)}>
        <i className={toggle ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div>
        <ul className={toggle ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item) => {
            return (
              <Link key={item.id} to={item.url} className="nav-links">
                <li>{item.title}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
