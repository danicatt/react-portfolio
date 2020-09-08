import React, { Component } from 'react';
import './App.scss';

import MainHeader from '../src/components/MainHeader/MainHeader';
import AboutMe from '../src/components/AboutMe/AboutMe';
import Projects from '../src/components/Projects/Projects';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <AboutMe />
        <Projects />
      </div>
    );
  }
}

export default App;
