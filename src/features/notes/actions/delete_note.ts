"use server";

import { revalidatePath } from "next/cache";
import { deleteNote } from "../repo/note_repo";

export async function deleteNoteAction(id: string) {
  await deleteNote(id);
  revalidatePath("/next-optimistic");
}
