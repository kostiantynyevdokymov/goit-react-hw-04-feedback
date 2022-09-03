import React from 'react';
import PropTypes from 'prop-types';
import Button from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  Object.keys(options).map(item => (
    <Button
      type="button"
      name={item}
      onClick={() => onLeaveFeedback(item)}
      key={item}
    >
      {item}
    </Button>
  ));
FeedbackOptions.prototype = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};
