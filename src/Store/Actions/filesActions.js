import { ADD_FILES, ADD_FILE } from "./actionTypes";

export const addFiles = (payload) => {
  return { type: ADD_FILES, payload };
};

export const addFile = (payload) => {
  return { type: ADD_FILE, payload };
};
