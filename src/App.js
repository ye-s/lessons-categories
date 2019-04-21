import React, { Component } from 'react';
import LessonCategoriesContainer from './modules/categories/containers/LessonsCategoriesContainer';
import { LESSONS as lessons } from './lessons.constants';
import logo from './logo.svg';
import './App.css';
import './styles/lessonCategory.css';

class App extends Component {
  state = {
    lessons: lessons
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div>
          <LessonCategoriesContainer lessons={lessons}/>
        </div>
      </div>
    );
  }
}

export default App;
