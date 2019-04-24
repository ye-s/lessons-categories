import React, { Component } from 'react';
import LessonCategoriesContainer from './modules/categories/containers/LessonsCategoriesContainer';
import LessonContent from './modules/categories/components/LessonContent';
import { LESSONS as lessons } from './lessons.constants';
import './App.css';
import './styles/lessonCategory.css';

const initialLessons = lessons;

class App extends Component {
  state = {
    lessons: initialLessons,
    content: '',
    chosenLesson: '',
  }

  showLesson = (lessonName) => {
    let output = '';
    for(let i = 0; i < 1000; i++) {
      output += `${lessonName} `;
    }
    this.setState((prevState, props) => (
      { 
        content: output,
        chosenLesson: lessonName
      }
    ));
  }

  render() {
    const { 
      content,
      chosenLesson
    } = this.state;

    return (
      <div className="App">
        <div className="lessonsModule">
          <LessonCategoriesContainer 
            showLesson={this.showLesson}
            lessons={this.state.lessons}
          />
          <LessonContent 
            content={content}
            chosenLesson={chosenLesson}
          />
        </div>
      </div>
    );
  }
}

export default App;
