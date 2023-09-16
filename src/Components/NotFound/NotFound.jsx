import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {

    useEffect(() => {
        document.title = "404 Not Found"
    }, [])

    return <>
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <h2 className=''>Not Found</h2>
            <p className='fs-4'>Page Doesn't Exist</p>
            <p>Would you like to return to Home page ?</p>
            <p>if yes, please <NavLink to="">click here</NavLink></p>
        </div>
    </>
}
