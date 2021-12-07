import React, { useState } from 'react';
import "./Login.css";
import initializeFirebase from '../../firebase/initialize';
import img from "../../image/signup.jpg";
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
initializeFirebase();


const Login = () => {
    const { signInWithGoogle, signInOldUser} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleOldUser=(e) => {
        e.preventDefault();
        signInOldUser(email,password)
        .then(result=>{
        history.push(redirect_uri);
        })

    }

    return (
        <div className='container'>
    <div className='left'>
<form className='forms' onSubmit={handleOldUser}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onBlur={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onBlur={handlePassword} class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Sign In</button>
  <br />
  <br />
</form>
<button onClick={handleGoogleSignIn} className='btn btn-primary px-3 py-1'>SignIn With Google</button>
</div>
<div className="right">
    <img src={img} fluid alt="images"/>
</div>
</div>
    );
};

export default Login;