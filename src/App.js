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
            <Route exact path="/MyPortfolio" element={<Home />} />
            <Route exact path="/MyPortfolio/Portfolio" element={<ProjectsPage />} />
            <Route path="/MyPortfolio/Education" element={<EducationPage />} />
            <Route path="/MyPortfolio/Hobbies" element={<HobbiesPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;