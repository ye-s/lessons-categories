import React, { Component } from 'react';
import LessonCategory from '../components/LessonCategory';

class LessonCategoriesContainer extends Component {
  render() {
    const { lessons } = this.props;
    return (
      <div className="lessonCategoriesContainer">
        { lessons.map((lesson) => {
          const { 
            name,
            isCategory,
            children,
            id
          } = lesson;
          return (<LessonCategory 
                    key={id}
                    name={name}
                    isCategory={isCategory}
                    children={children}
                  />)
        })
        }
      </div>
    );
  }
}

export default LessonCategoriesContainer;
