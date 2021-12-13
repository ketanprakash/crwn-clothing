import React from 'react';
import './custom-button.styles.scss'

export const CustomButton = ({children, ...otherProps}) => (
  <button className={`custom-button ${otherProps.googleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>{children}</button>
)