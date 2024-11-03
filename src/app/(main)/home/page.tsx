import VAvatar from "@/components/ui/avatar";
import { dummyNote } from "@/features/notes/models/note";
import React from "react";

export default function Page() {
  return (
    <div className="h-screen">
      {dummyNote.map((note) => {
        return (
          <div key={note.id}>
            <div className="flex gap-4 border-y border-slate-50/20 p-4">
              <VAvatar />
              <div>
                <div className="font-bold">{note.user.username}</div>
                <div className="text-sm">{note.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
