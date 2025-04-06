import React from 'react';
import './Banner.css'
import bannerPhoto from '../../assets/images/banner-main.png'

const Banner = ({handleCredits}) => {
    return (
        <div className='banner'>
            <img src={bannerPhoto} alt="" />
            <h1 className='banner-title'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='banner-sub-title'>Beyond Boundaries Beyond Limits</p>
            <button onClick={()=> handleCredits()} className='banner-btn btn'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;