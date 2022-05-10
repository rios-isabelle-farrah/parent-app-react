import axios from "axios";
import { apiURL } from "./apiURL";

const API = apiURL();

// file Routes
export const getAllFilesFN = async () => {
  let { data } = await axios.get(`${API}/files`);
  return data.payload;
};

export const updateFileById = async (id, updatedFile) => {
  if (id) {
    const editedFile = await axios.put(
      `${API}/files/${id}}`,
      updatedFile
    );
    return editedFile;
  }
};

export const getFileByID = async (id) => {
  if (id) {
    let { data } = await axios.get(`${API}/files/${id}`);
    return data.payload;
  }
};




export const deleteFileByID = async (id) => {
  if (id) {
    let { data } = await axios.delete(`${API}/files/${id}`);
    return data.payload;
  }
};




export const postFile = async (newFile) => {
  let { data } = await axios.post(`${API}/files`, newFile);
  return data.payload;
};

// meetings Routes
export const getAllMeetingsFN = async (id) => {
  if (id) {
    let { data } = await axios.get(
      `${API}/files/${id}/meetings`
    );
    return data.payload;
  }
};
export const updateMeetingById = async (id, meeting_id, updatedMeeting) => {
  if (id) {
    const editedMeeting = await axios.put(
      `${API}/files/${id}/meetings/${meeting_id}`,
      updatedMeeting
    );
    return editedMeeting;
  }
};


