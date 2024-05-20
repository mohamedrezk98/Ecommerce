import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
  let [errMsg,setErrMsg]=useState('')
  let navigate=useNavigate()

 function sendData(values){
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values).then(data=>{
      console.log(data)
      if(data.data.message=='success'){
        
        navigate('/signin')
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
      name: Yup.string().min(3).max(20, 'Must be 20 characters or less').required(),
      email: Yup.string().email().required(),
      password: Yup.string().matches(/^[a-z0-9]{6,}$/,"enter characters and numbers").required(),
      rePassword: Yup.string().oneOf([Yup.ref('password')],"repasswoprd and password not match").required()

    })
    return errors

  }


  let register = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: ""
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
        <h2>register</h2>
        <form onSubmit={register.handleSubmit}>
          <label htmlFor="Name">Name:</label>
          <input onBlur={register.handleBlur }  autoComplete="on"  onChange={register.handleChange} type="text" name='name' id='Name' className={`form-control mb-3 ${register.errors.name && register.touched.name ? 'is-invalid ' : ''}`} />
          {register.errors.name && register.touched.name ? <div className="alert text-bg-danger">{register.errors.name}</div> : ''}
          <label htmlFor="email">E-mail:</label>
          <input onBlur={register.handleBlur}  autoComplete="on" onChange={register.handleChange} type="email" name='email' id='email' className={`form-control mb-3 ${register.errors.email && register.touched.email ? 'is-invalid ' : ''}`} />
          {register.errors.email && register.touched.email ? <div className="alert text-bg-danger">{register.errors.email}</div> : ''}

          <label htmlFor="password">password:</label>
          <input onBlur={register.handleBlur} autoComplete="on" onChange={register.handleChange} type="password" name='password' id='password' className={`form-control mb-3 ${register.errors.password && register.touched.password ? 'is-invalid ' : ''}`} />
          {register.errors.password && register.touched.password ? <div className="alert  text-bg-danger">{register.errors.password}</div> : ''}

          <label htmlFor="rePassword">rePassword:</label>
          <input onBlur={register.handleBlur} autoComplete="on" onChange={register.handleChange} type="password" name='rePassword' id='rePassword' className={`form-control mb-3 ${register.errors.rePassword && register.touched.rePassword ? 'is-invalid ' : ''}`} />
          {register.errors.rePassword && register.touched.rePassword ? <div className="alert text-bg-danger">{register.errors.rePassword}</div> : ''}

        
          {errMsg ? <div className="alert text-bg-danger">{errMsg}</div> : ''}

          <button disabled={!(register.dirty && register.isValid)} type='submit' className='btn bg-main text-white' > siginup</button>
        </form>
      </div>
    </div>
  )
}
