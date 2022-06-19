import { createStore, combineReducers } from "redux";
import { projectsReducer } from "../reducers/projectsReducer";
import { searchReducer } from "../reducers/searchReducer";

const reducers = combineReducers({
  projects: projectsReducer,
  search: searchReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
