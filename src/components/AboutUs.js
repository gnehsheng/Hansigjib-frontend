import React from 'react'

import { images } from '../constants'
import '../style/aboutUs.css'

export const AboutUs = () => {
    return (
        <div className='app__aboutus app__bg flex__center section__padding' id='about'>
            <div className='app__aboutus-overlay flex__center'>
                <img src={images.H} alt='h letter' />
            </div>

            <div className='app__aboutus-content flex__center'>
                <div className='app__aboutus-content_about'>
                    <h1 className='headtext__comorant'>About Us</h1>
                    <img src={images.spoon} alt='about_spoon' className='spoon__img' />
                    <p className='p__opensans'>
                        Founded by classmates, Ho Wan Xuan and Ng Yong Sheng, who share
                        a passion for good food and good times
                    </p>
                    <button type='button' className='custom__button'>Know More</button>
                </div>
            </div>

            <div className='app__aboutus-content_knife flex__center'>
                <img src={images.knife} alt='about_knife' />
            </div>

            <div className='app__aboutus-content flex__center'>
                <div className='app__aboutus-content_history'>
                    <h1 className='headtext__comorant'>Our History</h1>
                    <img src={images.spoon} alt='about_spoon' className='spoon__img' />
                    <p className='p__opensans'>
                        Founded by classmates, Ho Wan Xuan and Ng Yong Sheng, who share
                        a passion for good food and good times
                    </p>
                    <button type='button' className='custom__button'>Know More</button>
                </div>
            </div>
        </div>
    )
}