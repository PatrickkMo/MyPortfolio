import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './Home';
import ProjectsPage from './Projects';
import EducationPage from './Education';
import HobbiesPage from './Hobbies';

class App extends React.Component {
  render() {
    return (

        <div>
          <HashRouter basename = {process.env.PUBLIC_URL}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Portfolio" element={<ProjectsPage />} />
              <Route path="/Education" element={<EducationPage />} />
              <Route path="/Hobbies" element={<HobbiesPage />} />
            </Routes>
          </HashRouter>
        </div>

    );
  }
}

export default App;