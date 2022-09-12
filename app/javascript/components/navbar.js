import React from 'react';
import {Link} from 'react-router-dom'
import './css/navbar'
import UdemyLogo from './images/logo-udemy'
import Home from './home'
import Cart from './images/cart'
import Login from './loginForm'
// import Routes from "../routes/index";
class navbar extends React.Component {
  state = {
    data : {}
  }
  componentDidMount() {
    fetch('/api/v1/courses')
    .then(response => response.json())
    .then(data => this.setState({data: data}));
  }
  render() {
    const user = this.state.data.user_data || []
    if(user.length == 0){
      return (
          <div>
          <nav className="navbar navbar-expand-lg bg-light nav-fixed max-index">
            <div className="container-fluid">
              <img src={UdemyLogo} style={{width: '100px'}}/>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ps-3">
                  <a className="nav-link pe-4" style={{fontSize:'13px', color:'black'}}>Categories</a>
                  <form class="d-flex pe-4" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '40rem', borderRadius: '20px', border: "1px solid black"}}/>
                  </form>
                  <a className="nav-link pe-4" style={{fontSize:'13px', color:'black'}}>Udemy Business</a>
                  <a className="nav-link pe-4" style={{fontSize:'13px', color:'black'}}>Teach on Udemy</a>
                  <img src={Cart} className='pe-4'/>
                  {/* <button className="btn btn-light" style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}} onClick={() => {window.location.href="/users/sign_in"}}>Login</button> */}
                  <Link to="/sign_in" className="btn btn-light"  style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}}>Login</Link>
                  <button to="/sign_up" className="btn btn-dark"  style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}} onClick={() => {window.location.href="/users/sign_up"}}>Signup</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }
    else{
      return (
        <div>
        <nav className="navbar navbar-expand-lg bg-light nav-fixed max-index">
          <div className="container-fluid">
            <img src={UdemyLogo} style={{width: '100px'}}/>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link pe-4" style={{fontSize:'13px', color:'black'}}>Categories</a>
                <form className="d-flex pe-4" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '40rem', borderRadius: '20px', border: "1px solid black"}}/>
              </form>
              <a className="nav-link pe-4" style={{fontSize:'13px', color:'black'}}>Udemy Business</a>
              <a className="nav-link pe-4" style={{fontSize:'13px', color:'black'}}>Teach on Udemy</a>
              <img src={Cart} className="pe-4"/>
              <Link to="/users/sign_out" element={<Home />} className="btn btn-light"  style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}}>{user.email}</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
    }
  }
}

export default navbar;
