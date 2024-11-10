"use server";

import { createNote } from "@/features/notes/repo/note_repo";
import { revalidatePath } from "next/cache";

export async function addNote(form: FormData) {
  const content = form.get("content") as string;
  const isPrivate = form.get("isPrivate") as string;

  await createNote({ content, isPrivate: isPrivate == "on" });
  revalidatePath("/");
}
