import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lesson extends Component {

  static propTypes = {
    id: PropTypes.number,
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
    const {
      name,
      depth,
      isLocked
    } = this.props;

    const cssPositionModifier = { 
      marginLeft: `${ -15 + depth * 15}px`,
    };
    return (
      <div className="lessonBlock"
           style={cssPositionModifier}
           onClick={this.handleClick}>
          <p>{name}</p>
          {
            isLocked && <span className="lessonLocked">locked</span>
          }
      </div>
    );
  }
}

export default Lesson;
