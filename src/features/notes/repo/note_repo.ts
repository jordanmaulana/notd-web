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
