"use server";

import { revalidatePath } from "next/cache";
import { deleteNote } from "../repo/note_repo";

export async function deleteNoteAction(formData: FormData) {
  const id = formData.get("id") as string;
  console.log(`id: ${id}`);
  await deleteNote(id);
  revalidatePath("/next-optimistic");
}
