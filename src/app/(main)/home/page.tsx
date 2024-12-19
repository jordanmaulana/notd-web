import VAvatar from "@/components/ui/avatar";

import NoteItem from "@/features/notes/components/note_item/note_item";
import NotePrivacy from "@/features/notes/components/note_privacy";
import NoteInput from "@/features/notes/components/note_input";
import Button from "@/components/ui/button";
import { getNotes } from "@/features/notes/repo/note_repo";
import { addNote } from "./action";

interface PageProps {
  searchParams?: Promise<{
    search?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const search = (await searchParams)?.search;
  const { data } = await getNotes({ search });

  return (
    <div className="min-h-screen border-x border-gray-200 dark:border-slate-50/20">
      <div className="flex gap-3 p-4">
        <VAvatar className="py-2" />
        <form className="flex flex-grow flex-col gap-3" action={addNote}>
          <NoteInput />
          <div className="h-[1px] w-full bg-gray-200 dark:bg-slate-50/20" />
          <div className="flex justify-between">
            <NotePrivacy />
            <Button>Save</Button>
          </div>
        </form>
      </div>
      {data?.map((note, index) => {
        return <NoteItem key={note.id} data={note} index={index} />;
      })}
    </div>
  );
}