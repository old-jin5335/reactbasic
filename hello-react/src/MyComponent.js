import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      Hello, my name is {name}. <br />
      The children is {children}. <br />
      My favorite number is {favoriteNumber}.
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'basic name'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
