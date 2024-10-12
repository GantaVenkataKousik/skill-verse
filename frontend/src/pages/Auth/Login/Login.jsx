import React from "react";
import "./Login.css";
import Footer from '../Footer.jsx';
import { useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../UserContext.jsx';

function Login() {

  const { dispatch } = useUser();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

          navigate("/skill2040/home");
        }
    catch (err) {
    }
  }

  return (
    <>
      
      <div className="loginContainer" style={{ color: 'black'}} >
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <section>
          <div className="wrapper">
            <header >Login</header>
            <form onSubmit={handleSubmit}>
              <div className="field email">
                <div className="input-area">
                  <input type="text" name="email" placeholder="Email Address" onChange={(e) => {
                    setEmail(e.target.value);
                  }} />
                  <i className="icon fas fa-envelope" />
                  <i className="error error-icon fas fa-exclamation-circle" />
                </div>
                <div className="error error-txt">Email can't be blank</div>
              </div>
              <div className="field password">
                <div className="input-area">
                  <input type="password" name="password" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value);
                  }} />
                  <i className="icon fas fa-lock" />
                  <i className="error error-icon fas fa-exclamation-circle" />
                </div>
                <div className="error error-txt">Password can't be blank</div>
              </div>
              <div className="pass-txt">
                <NavLink to="/register">Forgot password?</NavLink>
              </div>
              <input type="submit" value="Login" />
            </form>
            <div className="sign-txt">
              Not yet member? <NavLink to="/skill2040/register">Signup now</NavLink>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )

}

export default Login;