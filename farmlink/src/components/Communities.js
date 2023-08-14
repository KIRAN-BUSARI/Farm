import React from 'react'
import './Communities.css'

export default function Communities() {
    return (
        <>
            <div className="community-container">
                <h1>Communities</h1>
                <div className="community-content">
                    <div className="head1">
                        <h3>Community1</h3>
                    </div>
                    <div className="video">
                        <video autoPlay loop muted playsInline className='bgv' src={require('../Images/bgv.mp4')} typeof='video/mp4'></video>
                    </div>
                    <div className="button">
                        <button><a href="/join">Join Now</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}
