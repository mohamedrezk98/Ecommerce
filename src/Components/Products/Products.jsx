import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/cartContext'
import { toast } from 'react-toastify'
import Footer from '../Footer/Footer'

export default function Products() {
  function getprodects() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/Products")
  }
  let { data } = useQuery("getprodects", getprodects)
  let [btnLoading,SetBtnLoading]=useState(true)
  async function addProductTOCart(id) {
    SetBtnLoading(false)
    let data = await addToCart(id)
    console.log(data)
    if (data.status == "success") {
      toast.success("Prudect added successfully")
      setCounter(data.numOfCartItems)
      SetBtnLoading(true)
   
    }
    else {
      toast.error("error")

    }
  }
  let { counter, setCounter, addToCart } = useContext(cartContext)
  return (
    <>
    
      <div className="container my-5" >
        <div className="row">
          {data?.data.data.map((item) => {
            return <div key={item._id} className="col-md-2">
              <div className="product p-2  rounded-2 cursor-pointer ">
                <Link to={'/ProductDetails/' + item._id}>
                  <img src={item.imageCover} className='w-100' alt="" />
                  <span className='text-main '>{item.category.name}</span>
                  <h6 className='mt-3'>{item.title.split(' ').slice(0, 2).join(' ')}</h6>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <p>{item.price} EGP</p>
                    </div>
                    <div>
                      <p>       <i className="fa-solid fa-star rating-color "></i>  {item.ratingsAverage}</p>

                    </div>
                  </div>
                </Link>
                <button disabled={!btnLoading}  onClick={() => addProductTOCart(item._id)}  className='btn bg-main  w-100 text-white'> 
                
               {btnLoading? 'Add to Cart':"Loading ...."}
                </button>

              </div>

            </div>

          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}
