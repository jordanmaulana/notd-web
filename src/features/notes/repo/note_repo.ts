import axiosInstance from "@/api/axios_instance";
import { Note } from "../models/note";
import { API_URL } from "@/config/api_url";
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
  const sessionId = (await cookies()).get("sessionId")?.value ?? "";
  return await fetch(`${API_URL}/v1/notes/${id}`, {
    method: "DELETE",
    headers: { "session-id": sessionId },
  })
    .then(() => {
      return { data: true };
    })
    .catch((error) => {
      console.log(`error ${error}`);
      return { error: error };
    });
}
