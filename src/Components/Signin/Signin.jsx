import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function Signin() {
  let [errMsg,setErrMsg]=useState('')
  let navigate=useNavigate()

 function sendData(values){
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values).then(data=>{
      console.log(data)
      if(data.data.message=='success'){
        localStorage.setItem("token",data.data.token)
        navigate('/Home')
      }
    }

    ).catch(err=>{
      setErrMsg(err.response.data.message)
      console.log(err.response.data.message)
    }
  
    )
   
  }
  function validationSchema() {
   
    let errors = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().matches(/^[a-z0-9]{6,}$/,"enter characters and numbers").required(),

    })
    return errors

  }


  let login = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,

    onSubmit: (values) => {
      console.log(values)
      sendData(values)
    }
  })
  return (
    <div>
      <div className="w-75 m-auto ">
        <h2>login</h2>
        <form onSubmit={login.handleSubmit}>
         
          <label htmlFor="email">E-mail:</label>
          <input onBlur={login.handleBlur}  autoComplete="on" onChange={login.handleChange} type="email" name='email' id='email' className={`form-control mb-3 ${login.errors.email && login.touched.email ? 'is-invalid ' : ''}`} />
          {login.errors.email && login.touched.email ? <div className="alert text-bg-danger">{login.errors.email}</div> : ''}

          <label htmlFor="password">password:</label>
          <input onBlur={login.handleBlur} autoComplete="on" onChange={login.handleChange} type="password" name='password' id='password' className={`form-control mb-3 ${login.errors.password && login.touched.password ? 'is-invalid ' : ''}`} />
          {login.errors.password && login.touched.password ? <div className="alert  text-bg-danger">{login.errors.password}</div> : ''}

        
        
          {errMsg ? <div className="alert text-bg-danger">{errMsg}</div> : ''}

          <button disabled={!(login.dirty && login.isValid)} type='submit' className='btn bg-main text-white' > Signin</button>
        </form>
      </div>
    </div>
  )
}
