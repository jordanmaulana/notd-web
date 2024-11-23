import axiosInstance from "@/api/axios_instance";
import { Note } from "../models/note";

import { API_URL } from "@/config/api_url";

import { apiClient } from "@/api/api_instance";
import { cookies } from "next/headers";

interface GetNotesReturn {
  data?: Note[];
  error?: string;
}

interface GetNotesProps {
  search?: string;
  isPrivate?: boolean;
  userId?: string;
}

export async function getNotes(params: GetNotesProps): Promise<GetNotesReturn> {
  return await axiosInstance
    .get(`/v1/notes`, { params })
    .then((response) => {
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
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response.data };
      }
      return { error: "Something went wrong" };
    });
}

interface DeleteNoteReturn {
  data?: boolean;
  error?: string;
}

export async function deleteNote(id: string): Promise<DeleteNoteReturn> {
  console.log(`delete note ${API_URL}/v1/notes/${id}`);

  const sessionId = (await cookies()).get("sessionId")?.value ?? "";
  return await fetch(`${API_URL}/v1/notes/${id}`, {
    method: "DELETE",
    headers: { "session-id": sessionId },
  })
    .then(() => {
      console.log(`success`);

      return { data: true };
    })
    .catch((error) => {
      console.log(`error ${error}`);
      return { error: "error" };
    });
  return await apiClient
    .delete(`/v1/notes/${id}`)
    .then(() => {
      console.log(`success`);

      return { data: true };
    })
    .catch((error) => {
      console.log(`error ${error}`);

      if (error.response) {
        console.log(`error response ${error.response.data}`);

        return { error: error.response.data };
      }
      return { error: "Something went wrong" };
    });
}
