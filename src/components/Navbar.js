import React, { useState } from 'react'
import './Navbar.css'
export default function Navbar() {
    const [menu,setMenu] = useState("home")
  return (
    <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="src/assets/logo.png" alt="Loading" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2">
                    <li onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                    <li onClick={()=> setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
                    <li onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</li>
                    <li onClick={()=> setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
                    </ul>
                <div className="nav-right">
                <img src="/assets/basket_icon.png" alt="basket" className='basket' />
                <div className="dot"></div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <img src="/assets/search_icon.png" alt="search" className='searchIcon' />
                    <button type="button" className="btn btn-outline-success sign_in">Sign in</button>
                </form>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
