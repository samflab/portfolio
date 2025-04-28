import React, { useState } from 'react'
import { menuItems } from './constants'
import { Link } from 'react-router-dom'
import './styles/Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
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
              <button
                key={item.id}
                className="nav-links"
                onClick={() => handleScroll(item.url)}
              >
                <li>{item.title}</li>
              </button>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
