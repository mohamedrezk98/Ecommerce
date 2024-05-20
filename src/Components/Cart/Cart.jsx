import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/cartContext'
import { ThreeCircles } from 'react-loader-spinner'

export default function Cart() {
  let { getUserCart, deleteFormCart, updateQTY,createChekchout } = useContext(cartContext)
  const [items, setItems] = useState([])

  async function checkOut(id) {
    let data = await createChekchout(id)
    console.log(data.session.url)
    window.location.href=data.session.url
  }
  
  async function updateItemQuantity(id, count) {
    let data = await updateQTY(id, count)
    setItems(data?.data)
  }
  async function removeFromCart(id) {
    let data = await deleteFormCart(id)
    console.log(data)
    setItems(data?.data)
  }
  useEffect(() => {
    (async () => {
      let data = await getUserCart()
      if(data?.response?.data?.statusMsg=="fail"){
        return setItems({statusMsg:'fail'})
      }
      setItems(data?.data)
    })()
  }, [])
  if(items?.statusMsg=="fail")return <h1 className='text-main text-center my-3 '>No items in cart  </h1> 
  return (
    <div>
      {items?.totalCartPrice ? <div className="container bg-main-light my-2 p-3">
        <h2>Shop Cart</h2>
        <p className="text-main">Total Cart Price:{items?.totalCartPrice} EGP </p>
        {items.products.map(item => {
          return <div className="row  border-bottom p-2" key={item._id}>
            <div className="col-md-1 ">
              <img src={item.product.imageCover} className='w-100' alt="" />
            </div>
            <div className="col-md-11 d-flex justify-content-between ">
              <div className="col-md-9">
                <p className=" m-0 p-0 "> {item.product.title}</p>
                <p className='text-main mt-1 p-0 '> Price: {item.price} EGP</p>
                <button onClick={() => removeFromCart(item.product._id)} className='btn   mt-2 p-0'><i className=" fa-solid fa-trash-can text-main" ></i> Remove</button>

              </div>
              <div className="col-md-2 d-flex justify-content-center  align-items-start  ">
                <button onClick={() => updateItemQuantity(item.product._id, item.count + 1)} className='btn brdr'>+</button>
                <span className='mx-2 pt-2'>{item.count}</span>
                <button disabled={item.count==1} onClick={() => updateItemQuantity(item.product._id, item.count - 1)} className='btn brdr'>-</button>

              </div>
            </div>
          </div>



        })}
        <button  onClick={()=>checkOut(items._id)} className='btn bg-main text-white my-4 w-25'>Place Order </button>
      </div> :<ThreeCircles
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



    </div>
  )
}
