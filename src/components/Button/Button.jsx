import React from 'react';
import classNames from 'classnames';
import './Button.css';

const Button = ({ children, pattern, ...props }) => (
  <button
    {...props}
    className={classNames(
      'button',
      `button_${pattern}`,
      props.className,
    )}
  >
    {children}
  </button>
);

export default Button;
