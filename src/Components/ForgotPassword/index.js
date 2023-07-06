import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ForgotPassword.css"

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/forgotPassword`, { email: email });
            if (response) {
                setIsEmailSent(true);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <div>
            
            {!isEmailSent ?
                <form onSubmit={handleSubmit}>
                <div className="card1 text-center" >
                <div className="card1-header h2 text-white bg-primary">Password Reset</div>
                <div className="card1-body px-5">
                    <p className="card1-text py-2">
                        Enter your email address and we'll send you an email with Reset password link.
                    </p>
                    <div className="form-outline">
                        <input type="email" id="typeEmail" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control my-3" />
                        <label className="form-label"  >Enter Your Email</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-60">Submit</button>
                    <div className="d-flex justify-content-between mt-4">
                        <a className="" href="/login">Login</a>
                        <a className="" href="/register">Register</a>
                    </div>
                </div>
            </div> </form> :
                <div>Reset password link has been sent to your email address</div>
            }
        </div>
    )
}

export default ForgotPassword;