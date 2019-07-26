import { UPDATE_ROTATE, UPDATE_RED, UPDATE_GREEN, UPDATE_BLUE, UPDATE_ALPHA, UPDATE_SCALE } from "./use-reducer.const";

export const initialValue = {
  rotate: 0,
  red: 0,
  green: 0,
  blue: 0,
  alpha: 1,
  scale: 1,
}

export const cssReducer = (state = initialValue, action) => {
  const newState = {...state}
  switch(action.type) {
    case UPDATE_ROTATE:
      newState.rotate = action.value
      return newState
    case UPDATE_RED:
      newState.red = action.value
      return newState
    case UPDATE_GREEN:
      newState.green = action.value
      return newState
    case UPDATE_BLUE:
      newState.blue = action.value
      return newState
    case UPDATE_ALPHA:
      newState.alpha = action.value
      return newState
    case UPDATE_SCALE:
      newState.scale = action.value
      return newState
    default:
      return newState
  }
}