import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar ">
      <div className="container max-w-screen-lg lg:mx-auto px-6">
        <div className="logo lg:text-3xl text-2xl font-bold">
          Arnifi
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        {showNavbar ? <IoCloseSharp /> : <RxHamburgerMenu />}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Contact Us">Contact</NavLink>
            </li>
            <li >
              <NavLink to="/Chat" className="bg-darkblue rounded-md p-3 text-white">ChatBot</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;