import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function MainPage() {

    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/menu`;
        navigate(path);
    }

    const routeChange2 = () => {
        let path = `/signup`;
        navigate(path);
    }

    return (
        <>
            {/* <img className='mainPagePic' src={Placeholder} alt='placeholder' /> */}
            
            <button className='button'
                onClick={routeChange}
                primary>
                Order Now
            </button>
            <button className='button'
                onClick={routeChange2}>
                SIGN UP HERE
            </button>
        </>
    )
}