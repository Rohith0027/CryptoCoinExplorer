import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <Link to='/'>
    <div>
        <div className='navbar'>
            <FaCoins className='icon'/>
            <h1> CryptoCoin <span className='purple'>Explorer</span></h1>
        </div>
    </div>
    </Link>
  )
}

export default Navbar