import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { cartContext } from '../../context/cartContext'
import Footer from '../Footer/Footer'
import { ThreeCircles } from 'react-loader-spinner'

export default function ProductDetails() {
  let { id } = useParams()
  let [proudect, setProduct] = useState(null)

  async function getProdect() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/Products/${id}`)

    setProduct(data.data)
  }
  useEffect(() => {
    getProdect()
  }, [])
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
    {proudect? <> <div className="container my-4 ">
        <div className="row d-flex justify-content-center  align-items-center">
          <div className="col-md-3">
            <img src={proudect.imageCover} className='w-100' alt="" />
          </div>
          <div className="col-md-9 mt-4">
            <h5>{proudect.title}</h5>
            <span>{proudect.description}</span>

            <div className='d-flex justify-content-between  align-items-center my-3'>
            <h3>{proudect.price }  EGP</h3>

              <p>       <i className="fa-solid fa-star rating-color "></i>  {proudect.ratingsAverage}</p>

            </div>
            <button disabled={!btnLoading}  onClick={() => addProductTOCart(proudect._id)}  className='btn bg-main  w-100 text-white'> 
                
                {btnLoading? 'Add to Cart':"Loading ...."}
                 </button>
          </div>
        </div>
      </div>
      <Footer/></>:<ThreeCircles
        visible={true}
        height="100%"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{
          height:'100vh',
          display: 'flex',
          justifyContent:"center",
          alignItems:'center'
          
          

          
  
        }}
        wrapperClass=""
      />}
    
    </>
  )
}
