import axiosInstance from "@/api/axios_instance";
import { Note } from "../models/note";
import { cache } from "react";
import { cookies } from "next/headers";
import { API_URL } from "@/config/api_url";

interface GetNotesReturn {
  data?: Note[];
  error?: string;
}

interface GetNotesProps {
  search?: string;
  isPrivate?: boolean;
  userId?: string;
}

export const getNotes2 = cache(
  async (params: GetNotesProps): Promise<GetNotesReturn> => {
    // return api.get(`/v1/notes?search=${params.search}`).then((response) => {
    //   return { data: response };
    // });
    const sessionId = (await cookies()).get("sessionId")?.value;
    if (!sessionId) return { error: "Unknown session" };

    return await fetch(
      `${API_URL}/v1/notes?search=${encodeURIComponent(params.search ?? "")}`,
      {
        headers: { "session-id": sessionId },
      },
    ).then(async (response) => {
      const data = await response.json();
      console.log(`data:\n${data.toString()}`);
      return { data };
    });
  },
);

export async function getNotes(params: GetNotesProps): Promise<GetNotesReturn> {
  return await axiosInstance
    .get(`/v1/notes`, { params })
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
        return { error: error.response.data };
      }
      return { error: "Something went wrong" };
    });
}
