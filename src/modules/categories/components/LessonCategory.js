import React, { Component } from 'react';
import Lesson from './Lesson';
import PropTypes from 'prop-types';

class LessonCategory extends Component {

  static propTypes = {
    name: PropTypes.string,
    innerLessons: PropTypes.array,
    isCategory: PropTypes.bool,
    depth: PropTypes.number,
  }

  state = {
    isExpanded: false,
    isChildExpanded: false,
    childHeight: 0
  }

  expandCategory = (e) => {
    this.setState((prevState, props) => ({isExpanded: !this.state.isExpanded}))
  }

  adjustParentCategoryHeight = () => {
    this.setState((prevState, props) => ({isChildExpanded: !this.state.isChildExpanded}))
    // TODO return object with parameters (height, etc)
  }

  renderChildren = () => {
    const { 
      innerLessons,
      depth 
    } = this.props

    return innerLessons.map((lesson) => {
      const { 
        name,
        isCategory,
        children: nestedLessons,
        id
      } = lesson;
      const incrementedDepth = depth + 1;

      return isCategory
            ? (<LessonCategory 
                key={id}
                name={name}
                isCategory={isCategory}
                innerLessons={nestedLessons}
                depth={incrementedDepth}
              />)
            : (<Lesson
                key={id}
                name={name}
                depth={incrementedDepth}
              />)
    });
  };

  render() {
    const { 
      name,
      isCategory,
      innerLessons,
      depth 
    } = this.props;
    let quantityModifier = 1;
    let expandedHeight = 0;
    let cssPositionModifier = {};
   
    if (innerLessons) {
      quantityModifier = innerLessons.length + 1;
      expandedHeight = 35 * quantityModifier;
    }

    cssPositionModifier = { 
      height: `${ this.state.isExpanded ? expandedHeight : 35 }px`,
      marginLeft: `${ -15 + depth * 15}px`,
    };
    
    return (
      <div className="lessonCategoryBlock"
           style={cssPositionModifier}>
        <div className="lessonCategory"
             onClick={this.expandCategory}>
          <p>{name}</p>
        </div>
        { 
          isCategory && innerLessons && this.state.isExpanded
          && this.renderChildren()
          // : <Lesson
          //     name={name}
          //     depth={depth}
          //   />
        }
      </div>
    );
  }
}

export default LessonCategory;
