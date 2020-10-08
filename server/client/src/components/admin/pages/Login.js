import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import M from 'materialize-css'
import {AdminContext} from '../Admin'


function Login() {
  // History Initialization
  const history = useHistory()

  // Create State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Use Context
  const {state, dispatch} = useContext(AdminContext)
  //   Submit Handler
  const submitHandler = (evt) => {
    evt.preventDefault();
    const adminData = {
      email,
      password
    }
    fetch("/admin/login", {
      method: "POST",
      body: JSON.stringify(adminData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if(result.success){
            M.toast({html: result.message, classes:'bg-success'})  
            localStorage.setItem("admin", JSON.stringify(result.data))
            localStorage.setItem("jwt_token", result.token)
            dispatch({type:"ADMIN", payload: result.data})
            window.location = '/admin'
          }else{
            if(result.email) M.toast({html: result.email, classes:'bg-danger'})
            if(result.password) M.toast({html: result.password, classes:'bg-danger'})
            if(result.message) M.toast({html: result.message, classes:'bg-danger'})
          }
          
        },
        (error) => {
          console.log(error)
        }
      );  
    
  };

  return (
    <div className={"container bg-light"}>
      <div className={"row"}  style={{paddingTop:'5%'}}>
        <div className={"col-md-4 m-auto"}>
          <div className={"text-center mb-3"}>
            <img className={"img img-fluid"} src={"https://bit.ly/3kPLfxF"} style={{height:'120px'}} />
          </div>
          <div className={"card shadow-sm bg-white rounded-0 border-0"}>
            <div className={"card-body"}>
              <form onSubmit={submitHandler}>
                <div className={"form-group"}>
                  <div className={"form-group mb-4"}>
                    <input
                      type="text"
                      value={email}
                      onChange={(evt) => setEmail(evt.target.value)}
                      className="form-control"
                      placeholder={"Enter Email"}
                    />
                  </div>
                  <div className={"form-group mb-4"}>
                    <input
                      type="password"
                      value={password}
                      onChange={(evt) => setPassword(evt.target.value)}
                      className="form-control"
                      placeholder={"Enter Password"}
                    />
                  </div>
                  <div className={"text-center"}>
                    <button
                      type={"submit"}
                      className={"btn btn-info rounded-0 px-3"}
                    >
                      Login
                    </button>
                  </div>

                  <div className={"mt-3"}>
                    <Link to={"/admin/forget-password"}>
                      Lost your password?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;