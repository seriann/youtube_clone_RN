import { PRESSED, SEARCH } from "../constants";

const initialState = {
  pressed: false,
  search:""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return { ...state, search: payload };
    case PRESSED:
      return { ...state, pressed: payload };
    default:
      return state;
  }
};
