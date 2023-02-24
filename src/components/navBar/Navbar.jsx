import React from 'react'
import NavBarTop from './navBarTop/NavBarTop'
import './navbar.scss'
import NavBarSearch from './navBarSearch/NavBarSearch'
import NavBarMain from './navBarMain/NavBarMain'

const Navbar = () => {
  return (
    <div className='navBar'>
        <NavBarTop />
        <NavBarSearch />
        <NavBarMain /> 
    </div>
  )
}

export default Navbar