import { combineReducers } from "redux";
import filesReducer from "./files";
import meetingsReducer from "./meetings";


const rootReducers = combineReducers({
  files: filesReducer,
  meetings: meetingsReducer,

});

export default rootReducers;
