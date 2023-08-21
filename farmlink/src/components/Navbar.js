import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
    return (
        <>
            <div className="nav-container">
                {/* <video autoPlay loop muted playsInline className='bgv' src={require('../Images/bgv.mp4')} typeof='video/mp4'></video> */}
                <nav>
                    <h2 className='text-xl font-sans font-bold text-[#fff]'>FarmLink.!</h2>
                    <ul>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/communities">COMMUNITIES</a></li>
                        <li><a href="/support">SUPPORT</a></li>
                        <li><a href="/store">STORE</a></li>
                        <li><button className='bg-[#fff] px-[6px] py-[3px]'>Signin</button></li>
                    </ul>
                </nav>
            </div>
            {/* <div className="nav-content">
                <h1>FarmLink</h1>
                <a href="/About">Explore</a>
            </div> */}
        </>
    )
}