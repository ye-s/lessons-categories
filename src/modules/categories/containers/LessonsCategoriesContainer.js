import React, { Component } from 'react';
import LessonCategory from '../components/LessonCategory';
import Lesson from '../components/Lesson';

class LessonCategoriesContainer extends Component {

  showLesson = (name) => {
    const { showLesson } = this.props;
    
    showLesson(name);
  }

  render() {
    const { lessons, showLesson } = this.props;
    return (
      <div className="lessonCategoriesContainer">
        { lessons.map((lesson) => {
          const { 
            name,
            isCategory,
            children,
            id
          } = lesson;
          return isCategory
                 ? (<LessonCategory 
                      key={id}
                      name={name}
                      isCategory={isCategory}
                      innerLessons={children}
                      depth={1}
                      showLesson={this.showLesson}
                    />)
                 : (<Lesson 
                      key={id}
                      name={name}
                      depth={1}
                      showLesson={this.showLesson}
                    />)
        })
        }
      </div>
    );
  }
}

export default LessonCategoriesContainer;
