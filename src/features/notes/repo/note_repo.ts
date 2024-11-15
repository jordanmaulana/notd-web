import axiosInstance from "@/api/axios_instance";
import { Note } from "../models/note";

interface GetNotesReturn {
  data?: Note[];
  error?: string;
}

export async function getNotes(): Promise<GetNotesReturn> {
  return await axiosInstance
    .get(`/v1/notes`)
    .then(function (response) {
      return { data: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response.data };
      }
      return { error: "Something went wrong" };
    });
}

interface CreateNoteReturn {
  data?: Note;
  error?: string;
}

interface CreateNoteProps {
  content: string;
  isPrivate: boolean;
}

export async function createNote(
  props: CreateNoteProps,
): Promise<CreateNoteReturn> {
  return await axiosInstance
    .post(`/v1/notes`, props)
    .then(function (response) {
      return { data: response.data };
    })
    .catch((error) => {
      if (error.response) {
        console.log(`error ${error.response.data}`);

        return { error: error.response.data };
      }
      return { error: "Something went wrong" };
    });
}
