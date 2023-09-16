import React from 'react'

export default function Footer() {
    return <>
        <footer>
            <div className="footer-details py-5">
                <div className="container">
                    <div className="row py-5 gy-5">
                        <div className="col-md-4 text-center">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h3>AROUND THE WEB</h3>
                            <div className='social-icons d-flex justify-content-center column-gap-3'>
                                <i className="fa-brands fa-facebook icon"></i>
                                <i className="fa-brands fa-twitter icon"></i>
                                <i className="fa-brands fa-linkedin-in icon"></i>
                                <i className="fa-solid fa-globe icon"></i>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy text-center py-4">
                <span>Copyright © Your Website 2021</span>
            </div>
        </footer >
    </>
}
