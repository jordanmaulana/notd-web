import { dummyNote } from "@/features/notes/models/note";
import NoteItem from "@/features/notes/views/note_item";
import React from "react";

export default function Page() {
  return (
    <div className="h-screen">
      {dummyNote.map((note) => {
        return <NoteItem key={note.id} data={note} />;
      })}
    </div>
  );
}
