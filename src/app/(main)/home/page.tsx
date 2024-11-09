import VAvatar from "@/components/ui/avatar";

import NoteItem from "@/features/notes/components/note_item";
import NotePrivacy from "@/features/notes/components/note_privacy";
import React from "react";
import NoteInput from "@/features/notes/components/note_input";
import Button from "@/components/ui/button";
import { getNotes } from "@/features/notes/repo/note_repo";

export default async function Page() {
  const { data } = await getNotes();
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
      {data?.map((note) => {
        return <NoteItem key={note.id} data={note} />;
      })}
    </div>
  );
}
