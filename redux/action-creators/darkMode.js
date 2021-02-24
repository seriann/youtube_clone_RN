import { DARK_MODE } from '../constants'

export const setDark = (bool) =>( {
     type: DARK_MODE,
  payload: bool
})
