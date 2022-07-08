import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./SingIn.css";

const Singin = () => {
  const {singInGoogle} = useAuth()
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.form || '/'
  const handleGoogleSingIn =()=>{
    singInGoogle()
    .then(result =>{
        navigate(redirect_uri);
      })
  }

  return (
    <div className="singing-form">
      <div>
        <h2>Sing In</h2>
        <form>
          <input type="email" placeholder="Your Email" />
          <br />
          <input type="password" placeholder="Your Password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to join ema-john? <Link to="/register">Create Accout</Link>{" "}
        </p>
        <div>-----------------or---------------------</div>
        <button onClick={handleGoogleSingIn } className="btn-regular">Google SingIn</button>
      </div>
    </div>
  );
};

export default Singin;
