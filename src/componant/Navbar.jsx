import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
              <NavLink to="/"> 
                <img src="santhosh.jpg" alt="logo" className='logo-size' />
              </NavLink> 
            </div>
        </div>
    </div>
    </>
  )
}
