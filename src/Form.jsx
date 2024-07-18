import React, { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    let [userdata,setUserData]=useState({
        username:"",
        email:"",
        password:""
    })
    let[login,setLogin]=useState({
        useremail:"",
        userpassword:"",
    
    })
    let [islogin,setIslogin]=useState(false)
    let [usererror,setError]=useState({
        username:false,
        email:false,
        password:false
    })
    


const handlelogin=(e)=>{
    e.preventDefault()
    let {name,value}=e.target
    setLogin({...login,[name]:value})
}
 const handelData=(e)=>{
    e.preventDefault()
    let {name,value}=e.target
    console.log(name,value);
    setUserData({...userdata,[name]:value})
 } 
 const userData=(e)=>{
    e.preventDefault()
    if(userdata.email==login.useremail && userdata.password == login.userpassword){
        toast.success('🦄 Login success!!!!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
           
    }
    else{
        toast.error('🦄 login fail!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
           
    }
 }
 let passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/ 
 let emailRegex=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

 const handleSubmit=(e)=>{
    e.preventDefault()
    if(passRegex.test(userdata.password) && emailRegex.test(userdata.email)){
        
         setIslogin(true)
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
            setError({...usererror,password:true,username:true,email:true})
    }
    else{
        setIslogin(false)
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
             setError({...usererror,password:false})
    }
 }  
  return (
    <div>
         <ToastContainer/> 
        {
            islogin?(
                <form onSubmit={userData}>
                     <label>Eamil:</label>
                <input type="email" 
                placeholder='Enter Eamil' 
                value={login.email} 
                name='useremail' onChange={handlelogin}/>
                <br />
                <label>Password:</label>
                <input type="text" placeholder='Enter Password' value={login.password} name='userpassword' onChange={handlelogin} />
                <br />
                <button type='submit'>login</button>
                </form>
            )
        :(
            
            <form onSubmit={handleSubmit}>
                <label>UserName:</label>
                <input type="text"
                 placeholder='Enter Username'  
                 value={userdata.username}
                  name='username' 
                  onChange={handelData}
                  style={{borderColor:usererror.username?"red":userdata.username.length>0?"green":"blue"}}/>
                <br />
                <label>Eamil:</label>
                <input type="email" placeholder='Enter Eamil' value={userdata.email} name='email' onChange={handelData}
                style={{borderColor:usererror.email?"red":userdata.email.length>0?"green":"blue"}}/>
                <br />
                <label>Password:</label>
                <input type="text" placeholder='Enter Password' value={userdata.password} name='password' onChange={handelData}
                style={{borderColor:usererror.password?"red":userdata.password.length>0?"green":"blue"}} />
                <br />
                <button type='submit'>Sigin</button>
            </form>
        )}
    </div>
  )

}
export default Form