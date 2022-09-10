import React from 'react';
import Navbar from './navbar'
import Footer from './footer'
import Dashboard from './dashboard'
const home = () => {
  const node = document.getElementById('courses_data')
  const data = JSON.parse(node.getAttribute('data'))
  console.log(data)
    return (
        <div>
            <Navbar />
            <Dashboard />
            <Footer />
        </div>
    );
};

export default home;