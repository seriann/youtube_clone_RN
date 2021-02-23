import { PRESSED, SEARCH, IS_LOADING, IM_IN_A_VIDEO } from "../constants";


export const setData = (data) => ({
      type: SEARCH,
   payload: data
 });

export const setPressed = (bool) => ({
      type:PRESSED,
   payload: bool
 })
export const setInVideo = (bool) => ({
     type: IM_IN_A_VIDEO,
  payload: bool
})

export const setLoading = (bool) => ({
      type:IS_LOADING,
   payload: bool
 })
