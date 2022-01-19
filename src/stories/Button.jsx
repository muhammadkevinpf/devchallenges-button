import React from 'react';
import PropTypes from 'prop-types';
import './assets/css/button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color,
  size,
  label,
  disabled,
  variant,
  ...props
}) => {
  let buttonColor = '';
  switch (color) {
    case 'primary':
      buttonColor = 'button--primary';
      break;
    case 'secondary':
      buttonColor = 'button--secondary';
      break;
    case 'danger':
      buttonColor = 'button--danger';
      break;
    case 'default':
      buttonColor = 'button--default';
      break;
    default:
      buttonColor = 'button--default';
  }
  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${variant}`, buttonColor].join(' ')}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * what is the color of the button?
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Checks if button should be disabled
   */
  disabled: PropTypes.bool,
  /**
   * what is the variant of the button?
   */
   variant: PropTypes.oneOf(['outline', 'text']),
};

Button.defaultProps = {
  color: undefined,
  size: 'md',
  onClick: undefined,
  disabled: false,
  label: 'Default'
};
