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
            <section class="h-100 gradient-form" style={{backgroundColor:"#eee"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img src="https://img.freepik.com/free-vector/dating-app-concept-with-chat-emojis_23-2148278766.jpg?w=740&t=st=1688553301~exp=1688553901~hmac=8420fb21e823fcd26342f848f67a9a9aaca8a98a0dcf00309d43b6c126a9e601"
                    style={{width: "185px"}} alt="logo"/>
                  <h1 class="mt-1 mb-5 pb-1">ChatConnect</h1>
                </div>

                <form  onSubmit={handleLogin}>
                  <p>Please login to your account</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" value={userCred.email} class="form-control"
                     onChange={(e) => handleCred({email: e.target.value})} placeholder="Phone number or email address" />
                    <label class="form-label" >Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" value={userCred.password} onChange={(e) => handleCred({password: e.target.value})} class="form-control" />
                    <label class="form-label" >Password</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 m-3 " type="submit">Log
                      in</button>
                    <a class="text-muted" href="/forgotPassword">Forgot password?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <a class="text-muted" href="/register">Create Account Here</a>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-black px-3 py-4 p-md-5 mx-md-4">
                <h2 class="mb-4"> More than just a App</h2>
                
            <h3 class="small mb-0">With private messaging , you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.</h3>
            
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