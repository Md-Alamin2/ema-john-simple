import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className='singing-form'>
            <div>
                <h2>Register: Create Account</h2>
                <form action="">
                    <input type="email" placeholder='Your'/>
                    <br />
                    <input type="password" placeholder='Your password'/>
                    <br />
                    <input type="password" placeholder='re enter password'/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/singin">Sing In</Link></p>
                <div>------------or--------------</div>
                <button className="btn-regular">Google SingIn</button>
            </div>
        </div>
    );
};

export default Register;