import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/freshcart-logo.svg'

export default function AuthLayout() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  py-2 bg-body-tertiary  ">
                <div className="container-fluid mx-4 ">

                    <NavLink className="navbar-brand" to="#">
                        <img src={logo} alt="" />

                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
                            <li className='nav-item     mx-2 d-flex align-items-center '>

                                <ul className='d-flex list-unstyled'>
                                    <li>
                                        <a href="https://www.linkedin.com/in/mohamed-rizk-a2571b1aa/" target="_blank"  >
                                            <i className="fa-brands fa-linkedin mx-1 fs-5  "></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/mohamedrezk98" target="_blank">
                                            <i className="fa-brands fa-github mx-1 fs-5"></i>
                                        </a>


                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" >
                                            <i className="fa-brands fa-facebook mx-1 fs-5 "></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item ">

                                <NavLink className="nav-link  px-4 py-2" aria-current="/sigin" to="/signin">SignIn</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link px-4 py-2 " aria-current="/sinup" to="/signup">SignUp</NavLink>
                            </li>





                        </ul>

                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}
