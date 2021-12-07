import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
        <div className="left">
            <h1>contact with us
            </h1>
            <hr />
            <br />
            <br />
            <br />
            <h5>HotLine Number: 01811241234</h5>
            <h5>Email Address: www.hello123@gmail.com</h5>
            <h5>
                Office: GEC Circle,opposite to Sanmar Ocean City,Chittgong.
            </h5>

        </div>
        <div className="left">
        <h1>Statistics Since The Beginning:</h1>
        <hr />
        <br />
        <h5>Total Cases Handled: 20k</h5>
        <h5>Total Doctors' Connected: 10k</h5>
        <br />
        <h5>Top 3 Popular Services:
            <li>Cardiac Sergeon consultance</li>
            <li>Eye Specialist Doctors consultance</li>
            <li>Emergency Ambulance Services</li>
             </h5>
        </div>
                </div>
    );
};

export default Footer;