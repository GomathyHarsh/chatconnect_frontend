import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [userCred, setUserCred] = useState({email: '', password: ''});
    const navigate = useNavigate();
    const handleCred = value => {
        return setUserCred(cred => {
            return {...cred, ...value}
        })
    }
   

    const handleLogin = async (event) => {
        try{
            event.preventDefault();
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/signin`, userCred);
            if(response){
                navigate('/chat');
            }
        }catch(error){
            console.log('Error: ', error);
            alert("Unauthorized User");
        }
    }

    return (
        <div>
            <section className="h-100 gradient-form" style={{backgroundColor:"#eee"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <img src="https://img.freepik.com/free-vector/dating-app-concept-with-chat-emojis_23-2148278766.jpg?w=740&t=st=1688553301~exp=1688553901~hmac=8420fb21e823fcd26342f848f67a9a9aaca8a98a0dcf00309d43b6c126a9e601"
                    style={{width: "185px"}} alt="logo"/>
                  <h1 className="mt-1 mb-5 pb-1">ChatConnect</h1>
                </div>

                <form  onSubmit={handleLogin}>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example11" value={userCred.email} className="form-control"
                     onChange={(e) => handleCred({email: e.target.value})} placeholder="Phone number or email address" />
                    <label className="form-label" >Username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example22" value={userCred.password} onChange={(e) => handleCred({password: e.target.value})} className="form-control" />
                    <label className="form-label" >Password</label>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 m-3 " type="submit">Log
                      in</button>
                    <a className="text-muted" href="/forgotPassword">Forgot password?</a>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <a className="text-muted" href="/register">Create Account Here</a>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                <h2 className="mb-4"> More than just a App</h2>
                
            <h3 className="small mb-0">With private messaging , you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.</h3>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Login;