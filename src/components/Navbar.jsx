import React from 'react'
import '../index.css'

const Navbar = () => {
    return (
        <div className='container'>
            <header className="navbar-header">
                <div className="navbar-class">
                    <a className="navbar-logo">
                        <img src="/src/assets/brand_logo.png" alt="" width={80} height={50} />
                        <span className=""></span>
                    </a>
                    <nav className="navbar-menu">
                        <a className=""> Menu </a>
                        <a className=""> Location </a>
                        <a className=""> About </a>
                        <a className=""> Contact </a>
                    </nav>
                    <button className="navbar-btn">Login</button>
                </div>
            </header>
        </div>
    )
}

export default Navbar
