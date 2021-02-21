import { PRESSED, SEARCH } from "../constants";


export const setSearchTerm = (data) => ({
      type: SEARCH,
   payload: data
 });

export const setPressed = (bool) => ({
      type:PRESSED,
   payload: bool
 })
