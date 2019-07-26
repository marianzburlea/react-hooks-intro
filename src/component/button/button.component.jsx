import React from 'react'
import { StyledButton } from './button.style';

const Button = ({
  click,
  children,
}) => {
  return (
    <StyledButton onClick={click}>{children}</StyledButton>
  )
}

export default Button
