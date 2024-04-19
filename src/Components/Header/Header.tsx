import './Header.styles.css'
import * as React from "react";




const Header = ()=>{
    return(
        <>
            <header className='wrapper header-container'>
                <div className="header-title-nav">
                    <h1 id='header-title'>HireIA</h1>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Service</li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>
                </div>
                <div className="header-user-join">
                    <p>Sign In</p>
                    <button id='header-join-btn'>Sign Up</button>
                </div>
            </header>
        </>
    )
}

export default Header;