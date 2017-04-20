// @flow
import React from 'react';

const buttonStyles = {
  backgroundColor: '#FFFFFF',
  border: '1px solid rgb(236, 199, 199)',
  borderRadius: 3,
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
};

type Props = {|
  style?: Object,
  children?: React$Element<any>,
  onClick?: (e: SyntheticMouseEvent) => any,
|};

const Button = ({ children, onClick, style = {} }: Props) => (
  <button style={{ ...buttonStyles, ...style }} onClick={onClick}>
    {children}
  </button>
);

export default Button;
