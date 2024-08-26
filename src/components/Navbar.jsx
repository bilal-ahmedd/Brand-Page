import React from 'react'
import '../index.css'

const Navbar = () => {
    return (
        <div className='container'>
            <header className="navbar-header">
                <div className="navbar-class">
                    <a className="navbar-logo">
                        {/* <svg xmlns="../assets/nike-logo.jpeg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
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
