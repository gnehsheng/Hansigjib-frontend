import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../data/placeholder.png'

import '../style/main.css'

export const MainPage = () => {

    const navigate = useNavigate ();
    const routeChange = () => {
        let path = `/menu`;
        navigate(path);
    }

    return (
        <div className='app__header app__wrapper' id='home'>
            <div className='app__wrapper_info'>
                <h1 className='app__header-h1'>
                    The Best Korean Restaurant In Singapore
                </h1>
                <p>
                    At Hansigjib, we offer the best selection of Korean cuisine, using
                    the freshest ingredients imported directly from Korea.
                </p>
                <button type='button' className='custom__button' onClick={routeChange}>Explore Menu</button>
            </div>

            <div className='app__wrapper_img'>
            <img src={image} alt='welcome' />
            </div>
        </div>
    )
}
