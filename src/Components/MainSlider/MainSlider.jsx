import React from 'react'
import Slider from "react-slick";
import slide1 from '../../images/main-slider-1.jpg'
import slide2 from '../../images/main-slider-2.jpg'
import slide3 from '../../images/main-slider-4.jpg'
import slide4 from '../../images/main-slider-5.jpg'


export default function MainSlider() {

  var settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return <>
    <div className="container  my-4   ">
      <div className="row gx-0  rounded-2 ">
        <div className="col-md-8">
          <Slider {...settings}>
            <img height={500} className='w-100   ' src={slide1} alt="" />
            <img height={500} className='w-100   ' src={slide2} alt="" />

          </Slider>
        </div>
        <div className="col-md-4">
          <img height={250} className='w-100   ' src={slide4} alt="" />
          <img height={250} className='w-100 ' src={slide3} alt="" />
        </div>
      </div>

    </div>


  </>

}
