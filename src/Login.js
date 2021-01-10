import React , {useState }from 'react'
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';

import { useStateValue } from './StateProvider';
function Login() {
    const [state,dispatch]=useStateValue();
    const handleSubmit=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).then((result)=>{
             dispatch({type:actionTypes.SET_USER,user:result.user})
        }).catch((err)=>{
            console.log(err);
        })
    }
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    return (
        <div className="Login">
            <div className="container">
                 <div className="container_left">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"/>
                  <h1>
                  Facebook helps you connect and share with the people in your life.
                  </h1>
                 </div>
                 <div className="container_right">
                    <form>
                        <input type="text" placeholder="Email Address or phone number"  value={email} onChange={(e)=>{setemail(e.target.onChange)}} />
                        <input type="text" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                        <button type="submit" onClick={handleSubmit}>Log In</button>
                    </form>
                    <p><a href="">Forgotten password ?</a> </p>
                    <div className="button">
                    <button onClick={handleSubmit}>Log In With Google</button>
                    </div>
                    
                 </div>
            </div>
        </div>
    )
}

export default Login
