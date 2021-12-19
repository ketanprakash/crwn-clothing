import React from 'react';
import './custom-button.styles.scss'

export const CustomButton = ({children, ...otherProps}) => (
  <button className={`custom-button ${otherProps.googlesignin ? 'google-sign-in' : ''}`} {...otherProps}>{children}</button>
)