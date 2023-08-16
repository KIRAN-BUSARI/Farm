import React from 'react'
import './Landing.css'
import Navbar from './Navbar'

export default function Landing() {
    return (
        <>
            <video autoPlay loop muted playsInline className='bgv' src={require('../Images/bgv.mp4')} typeof='video/mp4'></video>
            <div className="container">
                <div className="land-content">
                    <h1>FarmLink</h1>
                    <p><b>Farmlink is a platform that connects farmers with buyers.</b></p>
                    <a href="/home">Explore</a>
                </div>
                <div className="land-content2">
                    <p><b>FarmLink is the platform that connects farmers with buyers.</b></p>
                </div>
                <div className="land-content3">
                    <p><b>FarmLink is the platform that connects farmers with buyers.</b></p>
                </div>
            </div>
            <Navbar />
        </>
    )
}
