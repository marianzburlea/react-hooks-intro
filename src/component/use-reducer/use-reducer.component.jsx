import React, { useReducer } from 'react'
import { StyledSquare } from './use-reducer.style';
import { cssReducer, initialValue } from './use-reducer.reducer';
import { cssRotateAction, cssRedAction, cssGreenAction, cssBlueAction, cssAlphaAction, cssScaleAction } from './use-reducer.action';

const UseReducer = () => {
  const [ state, dispatch ] = useReducer(cssReducer, initialValue)
  return (
    <div>
      <h1>useReducer</h1>
      <StyledSquare state={state}/>
      <div>
        Rotate: 
        <input
          type="range"
          min="0"
          max="360"
          value={state.rotate}
          onChange={e => dispatch(cssRotateAction(+e.target.value))}
        />
      </div>
      <div>
        Red: 
        <input
          type="range"
          min="0"
          max="255"
          value={state.red}
          onChange={e => dispatch(cssRedAction(+e.target.value))}
        />
      </div>
      <div>
        Green: 
        <input
          type="range"
          min="0"
          max="255"
          value={state.green}
          onChange={e => dispatch(cssGreenAction(+e.target.value))}
        />
      </div>
      <div>
        Blue: 
        <input
          type="range"
          min="0"
          max="255"
          value={state.blue}
          onChange={e => dispatch(cssBlueAction(+e.target.value))}
        />
      </div>
      <div>
        Alpha: 
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={state.alpha}
          onChange={e => dispatch(cssAlphaAction(+e.target.value))}
        />
      </div>
      <div>
        Scale: 
        <input
          type="range"
          min="0.2"
          max="1.2"
          step="0.01"
          value={state.scale}
          onChange={e => dispatch(cssScaleAction(+e.target.value))}
        />
      </div>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}

export default UseReducer
