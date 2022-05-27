import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginHandler = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCI6khKbzl59G5x5JnMjMfiuBe2-AIoKqc", {
                email: email,
                password: password,
                returnSecureToken: true,
            })
            if(response){
                console.log(response)
                  navigate("/")
                  localStorage.setItem("id", response.data.email)
                console.log("user logged in");
            }
        }catch(error){
            console.log(`error is ${error}`)
        }
    }
   
  return (
    <div className='center'>
       <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <div className="text_feild">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span></span>
          <label>Email id:</label>
        </div>
        <div className="text_feild">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span></span>
          <label>Password</label>
        </div>
      
        <input type="submit" value="login" />
        <div className="login_link">Need an accoun? <Link to="/signup">signUp</Link></div>
      </form>
    </div>
  )
}

export default Login
