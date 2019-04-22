import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lesson extends Component {

  static propTypes = {
    name: PropTypes.string,
    innerLessons: PropTypes.array,
    isCategory: PropTypes.bool,
    depth: PropTypes.number,
  }

  render() {
    const { name, depth } = this.props;

    const cssPositionModifier = { 
      marginLeft: `${ -15 + depth * 15}px`,
    };
    return (
      <div className="lessonBlock"
           style={cssPositionModifier}>
          <p>{name}</p>
      </div>
    );
  }
}

export default Lesson;
