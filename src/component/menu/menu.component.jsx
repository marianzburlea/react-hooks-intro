import React from 'react'
import { Link } from '@reach/router'
import { StyledMenu } from './menu.style';

const Menu = () => {
  return (
    <StyledMenu>
      <h2>Menu</h2>
      <Link to="/">Home</Link>
      <Link to="/use-state">Use state</Link>
      <Link to="/use-effect">Use effect</Link>
      <Link to="/use-context">Use context</Link>
      <Link to="/use-ref">Use ref</Link>
      <Link to="/use-reducer">Use reducer</Link>
      <Link to="/use-memo">Use memo</Link>
      <Link to="/use-callback">Use callback</Link>
    </StyledMenu>
  )
}

export default Menu
