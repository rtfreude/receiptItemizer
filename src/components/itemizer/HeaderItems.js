import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './headerItem.css';

class HeaderItems extends Component {
  static propTypes = {
    field: PropTypes.array.isRequired,
    classItem: PropTypes.string.isRequired,
  };

  render() {
    const { field, classItem } = this.props;
    return (
      <div className={classItem}>
        <span className="field-name">
          { field[0] }
        </span>
        <span className="field-info">
          { field[1] }
        </span>
      </div>
    );
  }
}

export default HeaderItems;
