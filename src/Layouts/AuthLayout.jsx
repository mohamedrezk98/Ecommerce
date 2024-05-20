import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/error.svg'

export default function AuthLayout() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  py-2 bg-body-tertiary ">
                <div className="container-fluid mx-4">
                    <NavLink className="navbar-brand" to="/home">
                        <img src={logo} alt="" />

                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
                            <li className="nav-item ">
                        
                                <NavLink className="nav-link " aria-current="/sigin" to="/signin">signin</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link " aria-current="/sinup" to="/signup">signup</NavLink>
                            </li>

                         

            

                        </ul>
                        
                    </div>
                </div>
            </nav>
      <Outlet/>

    </div>
  )
}
