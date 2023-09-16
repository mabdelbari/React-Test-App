import React, { useEffect } from 'react'

export default function About() {

    useEffect(() => {
        document.title = 'About';
    }, []);

    return <>
        <section className='about vh-100'>
            <div className="container h-100 ">
                <div className="about-content h-100 d-flex flex-column justify-content-center align-items-center row-gap-3 text-white">
                    <div className='section-title text-center '>
                        <h1 className='text-uppercase fw-bold'>About Component</h1>
                        <div className='title-break text-white position-relative '>
                            <i className='fa-solid fa-star'></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
}
