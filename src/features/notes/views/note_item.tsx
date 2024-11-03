import { Note } from "../models/note";
import VAvatar from "@/components/ui/avatar";

interface NoteItemProps {
  data: Note;
}

export default function NoteItem({ data }: NoteItemProps) {
  const { content: text } = data;

  // Split the text and identify hashtags
  const parts = text.split(/(\#[a-zA-Z0-9_]+)/g);

  return (
    <div className="flex gap-4 border-y border-slate-50/20 p-4">
      <VAvatar />
      <div>
        <div className="font-bold">{data.user.username}</div>
        <p>
          {parts.map((part, index) => {
            // Check if the part is a hashtag
            if (part.startsWith("#")) {
              return (
                <span
                  key={index}
                  className="text-sky-500 hover:cursor-pointer hover:underline"
                >
                  {part}
                </span>
              );
            }
            // Otherwise, return the text as is
            return <span key={index}>{part}</span>;
          })}
        </p>
      </div>
    </div>
  );
}
