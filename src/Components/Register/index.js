import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./Register.css";

const Register = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        mobileNumber: '',
        role: 1
    })
    const navigate = useNavigate();

    const handleForm = value => {
        return setUserDetails(cred => {
            return {...cred, ...value}
        })
    }


    const handleRegistration = async (event) => {
        try{
            event.preventDefault();
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, userDetails);
            if(response){
                navigate('/login');
            }
        }catch(error){
            console.log('Error: ', error);
        }
    }
    return (
        <div>
            <section class="vh-100 bg-image"
  style={{backgroundImage: "url('https://img.freepik.com/free-vector/flat-design-phone-text-bubble-collection_23-2149513799.jpg?w=740&t=st=1688555046~exp=1688555646~hmac=3a9eacd046d3af28b11bdf0badbc6dbefa4e48bddff9faaf3ae5369f4584b533')"}}>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius: "15px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleRegistration}>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg"  value={userDetails.name} onChange={(e) => handleForm({name: e.target.value})} class="form-control form-control-lg" />
                  <label class="form-label" >Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email"  value={userDetails.email} onChange={(e) => handleForm({email: e.target.value})} id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" >Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" value={userDetails.password}  onChange={(e) => handleForm({password: e.target.value})} class="form-control form-control-lg" />
                  <label class="form-label" >Password</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" value={userDetails.mobileNumber} onChange={(e) => handleForm({mobileNumber: e.target.value})} class="form-control form-control-lg" />
                  <label class="form-label" >Your Mobile Number</label>
                </div>

                

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

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

export default Register;