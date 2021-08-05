import React, { useState } from "react";
import "./css/Create.css";
import { IoIosEye } from 'react-icons/io';
import { IconContext } from "react-icons";




function Create() {
const [show, setShow] = useState(true);
return (
  <div >
    {show ? (
      <h1>
        Manage all your offers
        <br />
        and items from one place.
      </h1>
    ) : (
      <h1>Hello Merchant!</h1>
    )}
    <br />
    {show ? (
      <button data-testid="button" onClick={() => setShow(false)} className="login">
        Log in
      </button>
    ) : (
      <form style={{margin:'0rem'}}>
      <input type="text" className="user-name"  placeholder="Username \ Email \ Mobile Num" />
      <div>
      <input type="password" className="login-page password" placeholder= "Password" />
        <IconContext.Provider value={{ size:'20px', color:'gray', className:'eye' }}>
          <IoIosEye />
        </IconContext.Provider>
      </div>
      </form>
    )}
    {show ? (
      <button data-testid="button" className="create">Create Merchant Account</button>
    ) : (
     null
    )}
    {show ? null : <p className="forget">Forget Password?</p>}
    {show ? null : <button data-testid="button" className="login2">Log in</button>}
    {show ? null : (
      <p className="account">
        Don't Have an account? <a href="#">Create One</a>
      </p>
    )}
  </div>
);
}

export default Create;
