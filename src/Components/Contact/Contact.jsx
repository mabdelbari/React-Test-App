import React, { useEffect } from 'react'
import $ from 'jquery'


export default function Contact() {

    useEffect(() => {

        document.title = 'Contact'

        
        $('input').on('keyup', (e) => {
            console.log($(e.target).val().length)
            if ($(e.target).val().length > 0) {
                $(e.target).prev().css({ top: 0, opacity: 1 }, 100)
            } else {
                console.log("hi")

                $(e.target).prev().css({ top: 50, opacity: 0 }, 100)
            }
        })
    }, [])

    return <>

        <section className='contact vh-100 my-5 py-5'>

            <div className='section-title text-center py-5'>
                <h1 className='text-uppercase fw-bold'>Contact Section</h1>
                <div className='title-break position-relative '>
                    <i className='fa-solid fa-star'></i>
                </div>
            </div>
            <div className="contact-content">
                <div className="container">
                    <div className="contact-form w-75 mx-auto overflow-hidden">
                        <label htmlFor="userName">userName: </label>
                        <input type="text" id='userName' className='form-control border-0 border-bottom my-3' placeholder='userName' />
                        <label htmlFor="userAge">userAge: </label>
                        <input type="text" id='userAge' className='form-control border-0 border-bottom my-3' placeholder='userAge' />
                        <label htmlFor="userEmail">userEmail: </label>
                        <input type="email" id='userEmail' className='form-control border-0 border-bottom my-3' placeholder='userEmail' />
                        <label htmlFor="userPass">userPassword: </label>
                        <input type="password" id='userPass' className='form-control border-0 border-bottom my-3' placeholder='userPassword' />
                        <button className='btn text-white'>Send Message</button>
                    </div>
                </div>
            </div>


        </section >
    </>
}
