import React from 'react';
import Login from './loginForm'
import {Routes, Route} from 'react-router-dom'
class dashboard extends React.Component {
  state = {
    courses : []
  }
  componentDidMount() {
    fetch('/api/v1/courses')
    .then(response => response.json())
    .then(data => this.setState({courses: data.courses}));
  }
  render() {
    const courseData = this.state.courses;
    console.log(courseData)
    if (courseData.length!=0){
      for(var i=0;i<courseData.length;i++){
        return (
          <div className="mt-3 mb-5 ms-5 me-5" >
            <Routes>
              <Route path="/sign_in" element={<Login />}>
              </Route>
            </Routes>
            <div className="card" style={{width: "18rem"}}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{courseData[i].name}</h5>
                <p className="card-text">{courseData[i].description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default dashboard;
