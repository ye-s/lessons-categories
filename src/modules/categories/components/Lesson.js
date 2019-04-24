import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lesson extends Component {

  static propTypes = {
    name: PropTypes.string,
    innerLessons: PropTypes.array,
    isCategory: PropTypes.bool,
    depth: PropTypes.number,
  }

  handleClick = () => {
    const {
      name,
      showLesson
    } = this.props;

    showLesson(name);
  }

  render() {
    const { name, depth, showLesson } = this.props;

    const cssPositionModifier = { 
      marginLeft: `${ -15 + depth * 15}px`,
    };
    return (
      <div className="lessonBlock"
           style={cssPositionModifier}
           onClick={this.handleClick}>
          <p>{name}</p>
      </div>
    );
  }
}

export default Lesson;
