import { ADD_FILE, ADD_FILES} from "../Actions/actionTypes";

let initialState = {};

const files = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_FILES:
      const nextFileState = {};
      payload.forEach((file) => {
        nextFileState[file.id] = file;
      });
      return nextFileState;
    case ADD_FILE:
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

export default files;
