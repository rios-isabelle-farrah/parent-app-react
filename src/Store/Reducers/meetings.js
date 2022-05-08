import { ADD_MEETING, ADD_MEETINGS } from "../Actions/actionTypes";

let initialState = {};

const meetings = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MEETINGS:
      const nextMeetingState = {};
      payload.forEach((meeting) => {
        nextMeetingState[meeting.id] = meeting;
      });
      return nextMeetingState;
    case ADD_MEETING:
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

export default meetings;
