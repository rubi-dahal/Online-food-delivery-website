import { useState } from "react";
import "./LogInPopUp.css";
import { assets } from "../../assets/assets";

const LogInPopUp = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup"> 
       <form action="" className="login-popup-container">
       <div className="login-popup-title">
          <h2> {currState} </h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="cross" />
          </div>
        <div className="login-popup-inputs">
        {currState==='Sign Up' && <input type="text" placeholder="Your name" required />}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required/>
        
        </div>
         <button>{currState==="Sign Up"?"Create account":"Login"}</button>
         <div className="login-popup-condition">
             <input type="checkbox" name="condition" required/>
             <p>By continuing, i agree to the terms of use & privacy policy.</p>
         </div>
         {currState==="Login"
         ?<p> Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here!</span></p>
         :<p> Already have an account?<span onClick={()=>setCurrState("Login")}>Login here!</span></p>}
       </form>
    </div>
  )
}

export default LogInPopUp
