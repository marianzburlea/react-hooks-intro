import React from 'react'
import Menu from '../menu';
import { Router } from '@reach/router'
import { StyledIntroToReactHooks } from './app.style';
import Home from '../home.component';
import UseState from '../use-state';
import UseEffect from '../use-effect';
import UseContext from '../use-context';
import UseRef from '../use-ref';
import UseReducer from '../use-reducer';
import UseMemo from '../use-memo';
import UseCallback from '../use-callback';

const IntroToReactHooks = () => {
  return (
    <StyledIntroToReactHooks>
      <Menu />
      <Router>
        <Home path="/" />
        <UseState path="/use-state" />
        <UseEffect path="/use-effect" />
        <UseContext path="/use-context" />
        <UseRef path="/use-ref" />
        <UseReducer path="/use-reducer" />
        <UseMemo path="/use-memo" />
        <UseCallback path="/use-callback" />
      </Router>
    </StyledIntroToReactHooks>
  )
}

export default IntroToReactHooks
