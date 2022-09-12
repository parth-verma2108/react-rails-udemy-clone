import React from 'react';
import './css/loginForm'
import Navbar from './navbar'
class loginForm extends React.Component {
  handleLogin(e) {
    e.preventDefault()
    var userInfo = {
     user: {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
     }
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8;application/json" }
    };
    console.log(userInfo);
    fetch( "http://localhost:3000/users/sign_in",requestOptions)
    .then((res) => res.json())
    .then((data) => console.log("Data",data))
   }
  render() {
    return (
      <div>
        <Navbar />
        <div className="title">
          <h2 className="title-content" style={{width: "20rem"}}>Log in to your Udemy account</h2>
          <hr style={{width: "20rem"}}/>
        </div>
        <div>
          <form className="form-body" onSubmit={this.handleLogin} style={{textAlign: "center"}}>
          <input className="input-field" id="email" placeholder="email" type="email"/><br />
          <input className="input-field" id="password" placeholder="password" type="password"/><br />
          <button className="input-field btn btn-primary" onClick={this.handleLogin}>Login</button><br />
          <button className="input-field btn btn-primary" onClick={()=>this.props.changePage("signup")}>Sign Up!</button><br />
          </form>
        </div>
      </div>
    );
  }
}

export default loginForm;