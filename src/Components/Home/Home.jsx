import React, { useEffect } from 'react'
import homePhoto from '../../Assests/images/avataaars.svg';

export default function Home() {

    useEffect(() => {
        document.title = 'Home';
    }, []);
    
    return <>
        <section className='home vh-100'>
            <div className="container h-100 ">
                <div className="home-content h-100 d-flex flex-column justify-content-center align-items-center row-gap-3 text-white">
                    <img src={homePhoto} alt="Home" />
                    <div className='section-title text-center '>
                        <h1 className='text-uppercase fw-bold'>start framework</h1>
                        <div className='title-break position-relative '>
                            <i className='fa-solid fa-star'></i>
                        </div>
                    </div>
                    <span className='text-center'>
                        Graphic Artist - Web Designer - Illustrator
                    </span>
                </div>
            </div>
        </section>
    </>
}
