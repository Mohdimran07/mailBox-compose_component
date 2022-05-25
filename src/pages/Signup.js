import axios from "axios";
import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const signupHandler = async(e) => {
     e.preventDefault()
     console.log("signup")
     try{
        if( password !== confirmPassword){
            return alert("Password didn't match");
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCI6khKbzl59G5x5JnMjMfiuBe2-AIoKqc";
        const response = await axios.post(url, {
            email: email,
            password: password,
            returnSecureToken: true,
        })
        if(response){
            console.log(response)
            console.log("user successfully signed-in")
        }
     }catch(error){
         console.log(`error is ${error}`)
     }
    
  }
  return (
    <div className="center">
      <h1>Signup</h1>
      <form onSubmit={signupHandler}>
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
        <div className="text_feild">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span></span>
          <label>Re-enter Password</label>
        </div>
        <input type="submit" value="signup" />
        <div className="login_link">Already have an account login</div>
      </form>
    </div>
  );
};

export default Signup;
