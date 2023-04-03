import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import ProjectsPage from './Projects';
import EducationPage from './Education';
import HobbiesPage from './Hobbies';

class App extends React.Component {
  render() {
    return (

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Portfolio" element={<ProjectsPage />} />
            <Route path="/Education" element={<EducationPage />} />
            <Route path="/Hobbies" element={<HobbiesPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;