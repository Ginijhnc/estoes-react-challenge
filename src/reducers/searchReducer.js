import { types } from "../types/types";

const initialState = {
	searchTerm: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.search:
      return (state.searchTerm = action.payload);

    default:
      return state;
  }
};
