import React from 'react';
import '../../css/default.css';
import AboutCard from '../cards/aboutCard';

const Content = () => {
    return (
        <div className='contents ui container'>
            <span className='anchor' id='home'></span>
            <div className='welcomeSpace'>
                <p>homeRental</p>
            </div>
            <AboutCard />
            <br />
        </div>
    );
}

export default Content;