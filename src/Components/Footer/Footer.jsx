import React from 'react'
import img1 from '../../images/Download_on_the_App_Store_Badge.svg.af7387c62ffc4d6fdb20.png'
import img2 from '../../images/master.svg'
import img3 from '../../images/paypal.svg'
import img4 from '../../images/675747.3fa555d9abbc4dda953b.webp'
import img5 from '../../images/visa-1.svg'
import img6 from '../../images/google-play-badge-logo.43450edc3252606b6b3a9b9371267972.svg'
export default function
  () {
  return (
    <div className='container-fluid py-2 bg-body-tertiary'>
      <div className="row pt-3">
        <h3>Get the FreshCart app</h3>
        <p>We will send you a link, open it on your phone to download the app</p>
        <div className=' d-flex justify-content-between  align-items-center   '>
          <input type="email" name='mail' className=' form-control w-75 ' placeholder="Email....." />
          <button className=' bg-main rounded-2 border-0 p-2   text-white px-2 '>Share App Link</button>
        </div>
        <div className=' d-flex   justify-content-between  align-items-center '>
          <div className="d-flex   align-items-center  ">
            <p className='m-0 p-0'>Payment Partners</p>
            <ul className=' d-flex   m-0 p-0 align-items-center flex-wrap list-unstyled'  >
              <li><img src={img2} className='same' alt="" /></li>

              <li><img src={img3} className='same' alt="" /></li>

              <li><img src={img4} className='same' alt="" /></li>
              <li><img src={img5} className='same' alt="" /></li>

            </ul>
          </div>
          <div className="d-flex   align-items-center">
            <p className='m-0 p-0'>Get deliveries with FreshCart</p>
            <ul className=' d-flex   m-0 p-0 align-items-center flex-wrap list-unstyled'  >
              <li><img src={img1} style={{ height: "40px" }} className='mx-2' alt="" /></li>

              <li><img src={img6} style={{ height: "140px" }} alt="" /></li>



            </ul>

          </div>
        </div>
        <div className="text-center">
          <a href="https://www.linkedin.com/in/mohamed-rizk-a2571b1aa/" target="_blank"  >
            <i className="fa-brands fa-linkedin mx-1 fs-3  "></i>
          </a>
          <a href="https://github.com/mohamedrezk98" target="_blank">
            <i className="fa-brands fa-github mx-1 fs-3"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" >
            <i className="fa-brands fa-facebook mx-1 fs-3 "></i>      
                </a>



        </div>
        <p className="text-center  mb-1">
          <span className='fw-bolder'>
            Created by</span> Mohamed Rezk  © 2024</p>
      </div>

    </div>
  )
}
