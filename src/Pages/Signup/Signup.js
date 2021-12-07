
import React, { useState } from 'react';
import "./Signup.css";
import initializeFirebase from '../../firebase/initialize';
import img from "../../image/signup.jpg";
import { Link, useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
initializeFirebase();


const Signup = () => {
    const {signInWithGoogle,createNewUser,updateName} = useAuth();
    const history= useHistory();
    const location=useLocation();
    const redirect_uri=location.state?.from || '/home';
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [name,setName]=useState("");



    const handlePassword=event=>{
    setPassword(event.target.value);
    }
const handlename=(e)=>{
    setName(e.target.value);
}
    const handleEmail=(e)=>{
    setEmail(e.target.value);
    }
    const handleNewUser=e=>{
        e.preventDefault();
    createNewUser(email,password)
    .then(result=>{
        updateName(name);
        history.push(redirect_uri);
        setError("You have registered successfully!!");
    })
    .catch(error=>{
        setError(error.message);
    })
    }

    return (
        <div className='container'>
    <div className='left'>
<form className='forms' onSubmit={handleNewUser}>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Your Name</label>
    <input type="text" onBlur={handlename} class="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onBlur={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onBlur={handlePassword} class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Signup</button>
  <br />
  <br />
</form>
<p> Already Have an Acocunt? <Link to='/login'><button className='btn btn-primary px-3 py-1'>Login</button></Link></p>
<p className='text-danger'>{error}</p>
</div>
<div className="right">
    <img src={img} fluid alt="images"/>
</div>
</div>

    );
};

export default Signup;