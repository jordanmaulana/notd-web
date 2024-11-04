import VAvatar from "@/components/ui/avatar";

import { dummyNote } from "@/features/notes/models/note";
import NoteItem from "@/features/notes/components/note_item";
import NotePrivacy from "@/features/notes/components/note_privacy";
import React from "react";
import NoteInput from "@/features/notes/components/note_input";
import Button from "@/components/ui/button";

export default function Page() {
  return (
    <div className="h-screen">
      <div className="flex gap-3 p-4">
        <VAvatar />
        <div className="flex flex-grow flex-col gap-3">
          <NoteInput />
          <div className="h-[1px] w-full bg-slate-50/20" />
          <div className="flex justify-between">
            <NotePrivacy />
            <Button>Save</Button>
          </div>
        </div>
      </div>
      {dummyNote.map((note) => {
        return <NoteItem key={note.id} data={note} />;
      })}
    </div>
  );
}
