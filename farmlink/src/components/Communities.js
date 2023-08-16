import React from 'react'
import './Communities.css'

export default function Communities() {
    return (
        <>
            <div className="community-container">
                <h1>Communities</h1>
                {/* <img className='img' src={require('../Images/farmcommunity.png')} alt="farmercommunity" /> */}
                <div className="community-contents">
                    <div className="community-content1">
                        <div className="head1">
                            <h3>Community1</h3>
                        </div>
                        <hr />
                        <div className="box1">
                            <p><b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi obcaecati reiciendis, sunt temporibus facere delectus repudiandae esse perferendis sapiente vero?</b></p>
                        </div>
                        <div className="button">
                            <a className='joinnow' href="/join">Join Now</a>
                            {/* <button>Join Now</button> */}
                        </div>
                    </div>
                    <div className="community-content2">
                        <div className="head2">
                            <h3>Community2</h3>
                        </div>
                        <hr />
                        <div className="box2">
                            <p><b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi obcaecati reiciendis, sunt temporibus facere delectus repudiandae esse perferendis sapiente vero?</b></p>
                        </div>
                        <div className="button2">
                            <a className='joinnow' href="/join">Join Now</a>
                        </div>
                    </div>
                    <div className="community-content3">
                        <div className="head3">
                            <h3>Community3</h3>
                        </div>
                        <hr />
                        <div className="box3">
                            <p><b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi obcaecati reiciendis, sunt temporibus facere delectus repudiandae esse perferendis sapiente vero?</b></p>
                        </div>
                        <div className="button3">
                            <a className='joinnow' href="/join">Join Now</a>
                        </div>
                    </div>
                    <div className="community-content4">
                        <div className="head4">
                            <h3>Community4</h3>
                        </div>
                        <hr />
                        <div className="box4">
                            <p><b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi obcaecati reiciendis, sunt temporibus facere delectus repudiandae esse perferendis sapiente vero?</b></p>
                        </div>
                        <div className="button4">
                            <a className='joinnow' href="/join">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
