import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

export const CuteInput = ({ onChange, subtle, ...props }) => {
  return (
    <Form.Control
      className={`${subtle? 'subtle' : ''}`}
      onFocus={event => {subtle && event.target.select();}}
      onChange={event => {onChange(event.target.value);}}
      {...props} 
    />
  );
};
CuteInput.propTypes = {
  onChange: PropTypes.func,
  subtle: PropTypes.bool,
  value: PropTypes.string
};
export default CuteInput;