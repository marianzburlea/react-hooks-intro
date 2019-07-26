import { UPDATE_ROTATE, UPDATE_RED, UPDATE_GREEN, UPDATE_BLUE, UPDATE_ALPHA, UPDATE_SCALE } from "./use-reducer.const";

export const cssRotateAction = value => ({
  type: UPDATE_ROTATE,
  value,
})

export const cssRedAction = value => ({
  type: UPDATE_RED,
  value,
})

export const cssBlueAction = value => ({
  type: UPDATE_BLUE,
  value,
})

export const cssGreenAction = value => ({
  type: UPDATE_GREEN,
  value,
})

export const cssAlphaAction = value => ({
  type: UPDATE_ALPHA,
  value,
})

export const cssScaleAction = value => ({
  type: UPDATE_SCALE,
  value,
})
