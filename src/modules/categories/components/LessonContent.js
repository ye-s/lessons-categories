import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LessonContent extends Component {

  static propTypes = {
    content: PropTypes.string,
  }

  render() {
    const {
      content,
      chosenLesson
    } = this.props;

    return (
      <div className="lessonContent">
          <h2>{chosenLesson}</h2>
          <p>{content}</p>
      </div>
    );
  }
}

export default LessonContent;
