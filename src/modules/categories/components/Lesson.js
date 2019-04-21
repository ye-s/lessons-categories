import React, { Component } from 'react';

class Lesson extends Component {
  render() {
    const { name, isCategory } = this.props;
    return (
      <div className="lessonBlock">
        <div className="lesson">
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

export default Lesson;
