import { ADD_MEETING, ADD_MEETINGS } from "./actionTypes";

export const addMeeting = (payload) => {
  return { type: ADD_MEETING, payload };
};

export const addMeetings = (payload) => {
  return { type: ADD_MEETINGS, payload };
};


