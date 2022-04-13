import React from 'react'
import SubHeading from './SubHeading'
import { images } from '../constants'
import '../style/header.css'

export const Header = () => {
    return (
        <div className='app__header app__wrapper section__heading' id='home'>
            <div className='app__wrapper_info'>
                <SubHeading title='HANSIGJIB' />
                <h1 className='app__header-h1'>
                    The Best Korean Restaurant In Singapore
                </h1>
                <p className='p__opensans' style={{ margin: '2rem 0' }}>
                    At Hansigjib, we offer the best selection of Korean cuisine, using
                    the freshest ingredients imported directly from Korea.
                </p>
                <button type='button' className='custom__button'>Explore Menu</button>
            </div>

            <div className='app__wrapper_img'>
            <img src={images.placeholder} alt='welcome' />
            </div>
        </div>
    )
}
