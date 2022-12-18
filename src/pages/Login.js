import { useState } from "react";
import useApi from "../hooks/useApi";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

function Login(props) {
console.log("<<<LOGİN PROPS",props)

const dispatch =useDispatch()

  const api =useApi()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const btnLoginCheck = () => {
   // alert(email + " " + password);
   const postData ={email,password}
   //console.log(">> DATAA", postData)
   api.post('auth/login',postData)
   .then((response)=>{
    props.dispatch({
      type: 'set_token',
      payload:{
        token: response.data.data.token} 

    })

   }
   ).catch(err=>{
    console.log(err)
   })
  }

  return (
    <div className="row justify-content-center align-items-center my-3 py-3">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <form>
          <h4>Plese Login From Here</h4>
          <br />

          <div className="form-outline ">
            <input
              type="email"
              id="form1Example13"
              className="form-control form-control-lg"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className="form-label" >
              Email address
            </label>
          </div>

          <div className="form-outline ">
            <input
              type="password"
              id="form1Example23"
              className="form-control form-control-lg"
              onChange={(event) => setPassword(event.target.value)}
            />
            <label className="form-label" >
              Password
            </label>
          </div>

          <div className="d-flex justify-content-around align-items-center "></div>

          <button
            type="submit"
            className="btn btn-primary  btn-lg btn-block"
            onClick={btnLoginCheck}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps =(state) =>{
  return{
      ...state
  }
}

export default connect(mapStateToProps)(Login)

