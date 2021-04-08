import React from "react"
import "./style.css"







export default function Navbar() {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
      <h1><a href='/home' className='navbar-logo'>
          Dog<i className="fas fa-paw"></i>Bloggs
        </a></h1>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample navbarPosition' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a href='/home' className='navbar-item'>
              Home
            </a>
            <a href='/aboutus' className='navbar-item'>
              About Us
            </a>
            <a href='/parks' className='navbar-item'>
              Parks
            </a>
            <a href='/home' className='navbar-item'>
              Details
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}