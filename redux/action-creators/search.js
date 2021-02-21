import { PRESSED, SEARCH, IS_LOADING } from "../constants";


export const setData = (data) => ({
      type: SEARCH,
   payload: data
 });

export const setPressed = (bool) => ({
      type:PRESSED,
   payload: bool
 })

export const setLoading = (bool) => ({
      type:IS_LOADING,
   payload: bool
 })
