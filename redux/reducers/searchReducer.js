import { PRESSED, SEARCH, IS_LOADING } from "../constants";

const initialState = {
  pressed: false,
  search:[],
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return { ...state, search: payload };
    case PRESSED:
      return { ...state, pressed: payload };
    case IS_LOADING:
        return { ...state, isLoading: payload };
    default:
      return state;
  }
};
