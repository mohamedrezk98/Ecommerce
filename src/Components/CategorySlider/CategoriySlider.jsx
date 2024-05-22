import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategorySlider() {
  const [categories, setCategories] = useState([])
  async function getCategories() {
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    setCategories(data.data)
  }

  useEffect(() => {
    getCategories()
  }, [])
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container">
        <h3>show Popular Categories</h3>
        <Slider {...settings}>
          {

            categories.map((item) => (<div key={item._id} >
              <img   src={item.image} height={250} className='w-100 my-4 px-1' alt="" />
             <h5 className='text-center rounded '>{item.name}</h5>
            </div>

            ))
          }
        </Slider>
    </div>

  )
}
