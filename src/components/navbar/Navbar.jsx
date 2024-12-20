import React from 'react';
import white from  "../../images/medplanwhite.png";
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-content'>
                <div className='nav-header'>
                    <img
                        src={white}
                        width="24px"
                        height="auto"
                    />
                    <h1>MEDPLAN SOLUTIONS</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar