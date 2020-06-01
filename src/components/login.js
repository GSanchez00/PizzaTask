import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";

library.add(faUser);

const Login = (props) => 
{
    const login = (e) => {
      e.preventDefault()  ;
      const user = {
        email: document.getElementById("mail").value,
        password: document.getElementById("password").value
      };
      props.authenticate(user);
    };
    
    if(props.isAuthenticated){
        return <Redirect to='./orders' />
    }

    return (
        <div className="row" style={{justifyContent: "center", alignItems: "center", marginTop:"5%"}}>
            <div className="col-sm-4 centrado">
                  <div className="card">
                  <article className="card-body">
                      <span className="float-right btn btn-outline-primary">Sign up</span>
                      <br /><br /><h4 className="card-title mb-4 mt-1">Sign in</h4>
                      <hr />
                      <form onSubmit={login}>
                      <div className="form-group">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                          </div>
                          <input name="mail" id="mail" className="form-control" placeholder="Email or login" type="email" />
                      </div> 
                      </div> 
                      <div className="form-group">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"> <FontAwesomeIcon icon={faLock} /> </span>
                          </div>
                          <input className="form-control" placeholder="******" id="password" name="password" type="password" />
                      </div> 
                      </div> 
                      <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                      </div> 
                      <p className="text-center">Forgot password?</p>
                      </form>
                  </article>
                  </div> 
            </div> 
          </div>
      );
}

export default Login;