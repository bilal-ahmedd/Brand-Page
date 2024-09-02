import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container'>
            <header className="navbar-header">
                <div className="navbar-class">
                    <Link className="navbar-logo" to="/">
                        <img src="/src/assets/brand_logo.png" alt="" width={80} height={50} />
                        <span className=""></span>
                    </Link>
                    <nav className="navbar-menu">
                        <Link className="" to="/"> Home </Link>
                        <Link to="/contact"> Contact </Link>
                    </nav>
                    <button className="navbar-btn">Login</button>
                </div>
            </header>
        </div>
    )
}

export default Navbar
