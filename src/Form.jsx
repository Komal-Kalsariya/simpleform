import React, { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    let [userdata,setUserData]=useState({
        username:"",
        email:"",
        password:""
    })

 const handelData=(e)=>{
    e.preventDefault()
    let {name,value}=e.target
    console.log(name,value);
    setUserData({...userdata,[name]:value})
 } 
 const handleSubmit=(e)=>{
    e.preventDefault()
    if(userdata.username.length>0 && userdata.email.length>0 && userdata.password.length>0){
        toast.success('🦄 suceess!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }
    else{
        toast.success('🦄 Fail!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }
 }  
  return (
    <div>
        <ToastContainer/>
        <h2>SignUp Page</h2>
        <form onSubmit={handleSubmit}>
            <label>UserName:</label>
            <input type="text" placeholder='Enter Username'  value={userdata.username} name='username' onChange={handelData}/>
            <br />
            <label>Eamil:</label>
            <input type="email" placeholder='Enter Eamil' value={userdata.email} name='email' onChange={handelData}/>
            <br />
            <label>Password:</label>
            <input type="text" placeholder='Enter Password' value={userdata.password} name='password' onChange={handelData} />
            <br />
            <button type='submit'>Sigin</button>
        </form>
    </div>
  )
}

export default Form