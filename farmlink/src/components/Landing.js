import React from 'react'
import './Landing.css'
import Navbar from './Navbar'
export default function Landing() {
    return (
        <>
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
