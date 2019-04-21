import React, { Component } from 'react';
import Lesson from './Lesson';

class LessonCategory extends Component {


  renderChildren = () => {
    const { children } = this.props

    children.map((child) => {
      const { 
        name,
        isCategory,
        children,
        id
      } = child;

      return (<LessonCategory 
                key={id}
                name={name}
                isCategory={isCategory}
                children={children}
              />)
    })
  };

  render() {
    const { name, isCategory, children } = this.props;
    return (
      <div className="lessonCategoryBlock">
        <div className="lessonCategory">
          <p>{name}</p>
        </div>
        { 
          !isCategory && !children.length
          ? <Lesson name={name} />
          : this.renderChildren()
        }
      </div>
    );
  }
}

export default LessonCategory;
