import React, { useEffect } from 'react'
import $ from 'jquery'
import portImg1 from '../../Assests/images/poert1.png'
import portImg2 from '../../Assests/images/port2.png'
import portImg3 from '../../Assests/images/port3.png'


export default function Portfolio() {


    var clickedCard = (img) => {
        $('#imgModal img').attr('src', img);
        $('#imgModal').removeClass('d-none');
        $('#imgModal').on('click', (e) => {
            if (e.target !== document.querySelector('#imgModal img')) {
                $('#imgModal').addClass('d-none');
            }
        })
    }

    useEffect(() => {
        document.title = 'Portfolio';
    }, []);

    return <>

        <section className='portfolio vh-100 my-5 py-5'>

            <div className='section-title text-center py-5'>
                <h1 className='text-uppercase fw-bold'>Portfolio Component</h1>
                <div className='title-break position-relative '>
                    <i className='fa-solid fa-star'></i>
                </div>
            </div>
            <div className="portfolio-content">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-md-4">
                            <div className="card position-relative overflow-hidden" onClick={() => clickedCard(portImg1)}>
                                <img src={portImg1} className='w-100 rounded' alt="" />
                                <div className="overlay position-absolute"><i className='fa-solid fa-plus fa-6x text-white'></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card position-relative overflow-hidden" onClick={() => clickedCard(portImg2)}>
                                <img src={portImg2} className='w-100 rounded' alt="" />
                                <div className="overlay position-absolute"><i className='fa-solid fa-plus fa-6x text-white'></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card position-relative overflow-hidden" onClick={() => clickedCard(portImg3)}>
                                <img src={portImg3} className='w-100 rounded' alt="" />
                                <div className="overlay position-absolute"><i className='fa-solid fa-plus fa-6x text-white'></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card position-relative overflow-hidden" onClick={() => clickedCard(portImg1)}>
                                <img src={portImg1} className='w-100 rounded' alt="" />
                                <div className="overlay position-absolute"><i className='fa-solid fa-plus fa-6x text-white'></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card position-relative overflow-hidden" onClick={() => clickedCard(portImg2)}>
                                <img src={portImg2} className='w-100 rounded' alt="" />
                                <div className="overlay position-absolute"><i className='fa-solid fa-plus fa-6x text-white'></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card position-relative overflow-hidden" onClick={() => clickedCard(portImg3)}>
                                <img src={portImg3} className='w-100 rounded' alt="" />
                                <div className="overlay position-absolute"><i className='fa-solid fa-plus fa-6x text-white'></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="imgModal" className='d-none'>
                <div>
                    <img src={portImg1} alt="" />
                </div>
            </div>

        </section >
    </>
}
