import React from 'react'
import { useNavigate } from 'react-router-dom'
import Placeholder from '../data/PLACEHOLDER.png'

export default function MainPage() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/menu`;
        navigate(path);
    }

    return (
        <>
            
            <img className='mainPagePic' src={Placeholder} alt='placeholder' />
            <button className='button'
                onClick={routeChange}
                primary
            >
                Order Now
            </button>

        </>
    )
}