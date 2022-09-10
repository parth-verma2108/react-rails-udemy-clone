import React from 'react';
import './css/navbar'
import logo from './images/logo-udemy.svg'
const navbar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-light nav-fixed max-index">
            <div className="container-fluid">
              <img src={logo}/>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link" style={{fontSize:'15px'}}>Categories</a>
                  <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '40rem', borderRadius: '20px'}}/>
                </form>
                <a className="nav-link" href="#">Udemy Business</a>
                <a className="nav-link" href="#">Teach on Udemy</a>
                <button type="button" class="btn btn-light" style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}}>Login</button>
                <button type="button" class="btn btn-dark" style={{borderRadius:'0', border: '1px solid black', marginRight:'5px'}}>Signup</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default navbar;