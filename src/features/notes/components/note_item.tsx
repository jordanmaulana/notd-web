import { Note } from "../models/note";
import VAvatar from "@/components/ui/avatar";
import LinkPreview from "@/components/shared/link_preview";
import { formatTwitterDate } from "@/lib/string_utility";

interface NoteItemProps {
  data: Note;
}

export default function NoteItem({ data }: NoteItemProps) {
  const { content, user, createdAt } = data;
  const { name } = user;

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = content.match(urlRegex);
  const textWithoutUrls = content.replace(urlRegex, "");

  const parts = textWithoutUrls.split(/(\#[a-zA-Z0-9_]+)/g);

  return (
    <div className="flex gap-3 border-y border-slate-50/20 p-4">
      <VAvatar />
      <div>
        <div className="flex items-center gap-2">
          <div className="font-bold">{name}</div>
          <div className="text-placeholder">
            · {formatTwitterDate(createdAt)}
          </div>
        </div>
        <p>
          {parts.map((part, index) => {
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
            return <span key={index}>{part}</span>;
          })}
        </p>
        {urls && urls.length > 0 && (
          <div className="mt-4 w-full">
            {urls.map((url, index) => (
              <LinkPreview key={index} url={url} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
