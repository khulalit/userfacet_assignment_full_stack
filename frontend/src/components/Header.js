import React from 'react'

export default function Header() {
  return (
    <div className='header d-flex justify-content-around my-3 py-4 border-bottom sticky-top bg-white'>
        <div className='logo'>
               Teaching Slot Booking App
        </div>
        <div className='links d-inline-flex justify-content-around'>
            <div className='d-inline-flex align-items-center px-3'>
                <a href='#' className='text-decoration-none'>Home</a>
            </div>
            <div className='d-inline-flex align-items-center px-3'>
                <a href='#' className='text-decoration-none'>About App</a>
            </div>
        </div>
    </div>
  )
}