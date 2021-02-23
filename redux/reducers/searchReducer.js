import { PRESSED, SEARCH, IS_LOADING,IM_IN_A_VIDEO } from "../constants";

const initialState = {
  pressed: false,
  search:[],
  isLoading: false,
  inVideo: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return { ...state, search: payload };
    case PRESSED:
      return { ...state, pressed: payload };
    case IS_LOADING:
        return { ...state, isLoading: payload };
    case IM_IN_A_VIDEO:
        return { ...state, inVideo: payload };
    default:
      return state;
  }
};
