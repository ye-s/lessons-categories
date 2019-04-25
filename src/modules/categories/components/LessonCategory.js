import React, { Component } from 'react';
import Lesson from './Lesson';
import PropTypes from 'prop-types';
import { checkIfPrevQuizzesEnabled } from '../../../utils/lessons.utils';

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
    childNumber: 0,
    initialChilds: this.props.innerLessons.length,
  };

  expandCategory = (e) => {
    const { 
      innerLessons,
      depth
    } = this.props;
    const { 
      isExpanded,
    } = this.state;

    const updatedChildNumber = !isExpanded ? innerLessons.length : -innerLessons.length;

    this.setState((prevState, props) => (
        {
          isExpanded: !prevState.isExpanded,
          childNumber: depth > 1 ? prevState.childNumber : updatedChildNumber,
        }
      )
    );

    if (depth > 1) {
      this.updateChildQuantityModifier(updatedChildNumber);
    }
  }

  showLesson = (name) => {
    const { showLesson } = this.props;
    
    showLesson(name);
  }

  updateChildQuantityModifier = (modifier) => {
    const { 
      onExpand,
      depth,
    } = this.props;

    this.setState((prevState, props) => {
        const updatedChildNumber = prevState.childNumber + modifier;
        return {
          isChildExpanded: depth > 1 && updatedChildNumber > 0
                          ? prevState.isChildExpanded 
                          : prevState.isChildExpanded,
          childNumber: prevState.childNumber + modifier,
        }
      }
    );

    if (onExpand && modifier) {
      onExpand(modifier);
    } 
  }

  renderChildren = () => {
    const { 
      innerLessons,
      depth ,
      showLesson,
    } = this.props

    return innerLessons.map((lesson) => {
      const { 
        name,
        isCategory,
        children: nestedLessons,
        id
      } = lesson;
      const incrementedDepth = depth + 1;
      let isLessonLocked = false;
      
      if (!isCategory) {
        isLessonLocked = checkIfPrevQuizzesEnabled(innerLessons, id);
      }

      return isCategory
            ? (<LessonCategory 
                key={id}
                name={name}
                isCategory={isCategory}
                innerLessons={nestedLessons}
                depth={incrementedDepth}
                onExpand={this.updateChildQuantityModifier}
                showLesson={this.showLesson}
              />)
            : (<Lesson
                key={id}
                name={name}
                depth={incrementedDepth}
                isLocked={isLessonLocked}
                showLesson={this.showLesson}
              />)
    });
  };

  render() {
    const { 
      childNumber,
      isExpanded,
    } = this.state;
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
      quantityModifier = quantityModifier + childNumber;
      expandedHeight = 35 * quantityModifier;
    }

    cssPositionModifier = { 
      height: `${ this.state.isExpanded ? expandedHeight : 35 }px`,
      marginLeft: `${ -15 + depth * 15}px`,
    };

    const showChildren = isCategory && innerLessons && isExpanded;
    
    return (
      <div className="lessonCategoryBlock"
           style={cssPositionModifier}>
        <div className="lessonCategory"
             onClick={this.expandCategory}>
          <div className="lessonCategory--arrow" />
          <p>{name}</p>
        </div>
        { 
          showChildren && this.renderChildren()
        }
      </div>
    );
  }
}

export default LessonCategory;
