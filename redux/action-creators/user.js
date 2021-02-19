import { SET_USER } from "../constants";


const setUser = (data) => ({
      type: SET_USER,
   payload: data
 })

 const logoutUser = () => (dispatch) => dispatch(setUser({}));

 export {setUser, logoutUser}
