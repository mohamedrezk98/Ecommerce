import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { ThreeCircles } from 'react-loader-spinner'

export default function Categories() {

  const [categories, setCategories] = useState(null)
  async function getCategories() {
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    setCategories(data.data)

  }

  useEffect(() => {
    getCategories()
  }, [])

  return (<>
    {categories ?<><div className="container my-5" >
      <div className="row " >
        {categories.map((item) => {
          return <div key={item._id} className="col-md-3">
            <div className=" p-2  rounded-2 ">
                <img src={item.image} className='w-100 rounded' height="350" alt="" />
                <h3 className='my-3'>{item.name}</h3>
                


            </div>

          </div>

        })}
      </div>
    </div>
  
  <Footer/> </>: <ThreeCircles
      visible={true}

      height="100%"
      width="100"
      color="#4fa94d"
      ariaLabel="three-circles-loading"
      wrapperStyle={{
        height: '100vh',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center'





      }}
      wrapperClass="" />}

  </>

  )

}
