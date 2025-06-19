import React from 'react';
import medplan from "../../images/medplanicon.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-contents'>
            <div className='footer-header'>
                <img
                    src={medplan}
                    width="32px"
                    height="auto"
                    alt='icon'
                />
                <p>Medplan Solutions</p>
            </div>
            <hr className='footer-hr'></hr>
            <div className='footer-row'>
                <p>Copyright © 2023 Medopera Enterprise. All right reserved.</p>
                <div className='footer-links'>
                    <a href='privacy-policy'>Privacy policy</a> | 
                    <a href=''> Terms of use</a> | 
                    <a href=''> Legal</a> | 
                </div>
                <p>Nigeria</p>
            </div>
        </div>
    </div>
  )
}

export default Footer