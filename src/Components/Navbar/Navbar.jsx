import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/freshcart-logo.svg'
import { cartContext } from '../../context/cartContext'
export default function Navbar() {
    let { counter, getUserCart, setCounter } = useContext(cartContext)
    useEffect(() => {
        (async () => {
            let data = await getUserCart()

            setCounter(data.numOfCartItems)
        })()
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg  py-2 bg-body-tertiary ">
                <div className="container-fluid mx-2">
                    <NavLink className="navbar-brand" to="/home">
                        <img src={logo} alt="" />

                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2  mb-lg-0">
                            <li className="nav-item ">

                                <NavLink className="nav-link " aria-current="/home" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link " aria-current="/cart" to="/cart">Cart</NavLink>
                            </li>

                            <li className="nav-item ">
                                <NavLink className="nav-link " aria-current="/products" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item  ">
                                <NavLink className="nav-link" to="/Categories">Categories</NavLink>
                            </li>
                            <li className="nav-item  ">
                                <NavLink className="nav-link" to="/Brands">Brands</NavLink>
                            </li>



                        </ul>
                        <ul className="navbar-nav ms-aut mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item ">
                                <ul className='d-flex list-unstyled '>
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


                            <li className="nav-item  ">

                                <NavLink to="/cart" className="btn  position-relative mt-1 mx-2">
                                    <i className="fa-solid fa-cart-shopping"></i>

                                    {counter ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {counter}
                                        <span className="visually-hidden">unread messages</span>
                                    </span> : ''}
                                </NavLink>

                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link  bg-main rounded-2  mx-2" aria-current="/" to="/signin ">logout</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


