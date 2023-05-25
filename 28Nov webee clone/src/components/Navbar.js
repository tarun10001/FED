import React from 'react';
import '../App.css';


function Navbar() {
    return (
        <div>
            <div className="topnav">
                <div className="topnav1">
                <a href="#" className="active">Home</a>
                <a href="#">Contact</a>
                <a href="#">About</a>

                <div className='btnn'>
                    <a>Documentation</a>
                    <button className='btn1'>Purchase now</button>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;