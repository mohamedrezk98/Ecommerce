import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { ThreeCircles } from 'react-loader-spinner'

export default function Brands() {

  let [Brands, setBrands] = useState(null)
  async function getCategories() {
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/Brands')
    setBrands(data.data)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (<>
  {Brands? <>    <div className="container my-5" >
      <div className="row">
        {Brands.map((item) => {
          return <div key={item._id} className="col-md-3">
            <div className=" p-2  rounded-2  my-1 ">
              <img src={item.image} className='w-100 rounded border-2   shadow-sm' height="350" alt="" />
              <h3 className='my-3 text-main border text-center'>{item.name}</h3>



            </div>

          </div>

        })}
      </div>
    </div>
  <Footer/></> :<ThreeCircles
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
      /> }
      
  
  
  </>
 

  )
}
