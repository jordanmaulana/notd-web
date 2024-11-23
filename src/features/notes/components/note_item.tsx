import { Note } from "../models/note";
import VAvatar from "@/components/ui/avatar";
import LinkPreview from "@/components/shared/link_preview";
import { formatTwitterDate } from "@/lib/string_utility";
import { Suspense } from "react";
import Loading from "@/components/ui/loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown_menu";

interface NoteItemProps {
  data: Note;
  index: number;
}

export default function NoteItem({ data, index }: NoteItemProps) {
  const { content, user, createdAt } = data;
  const { name } = user;

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = content.match(urlRegex);
  const textWithoutUrls = content.replace(urlRegex, "");

  const parts = textWithoutUrls.split(/(\#[a-zA-Z0-9_]+)/g);

  return (
    <div className="flex w-full gap-3 border-y border-slate-50/20 p-4">
      <VAvatar />
      <div className="w-full">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <div className="font-bold">{name}</div>
            <div className="text-placeholder">
              · {formatTwitterDate(createdAt)}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex cursor-pointer items-center justify-center rounded-full p-2 text-placeholder hover:bg-slate-800 hover:text-blue-700">
              <FontAwesomeIcon icon={faEllipsis} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="flex cursor-pointer items-center gap-2 font-bold text-red-500 focus:outline-none">
                <FontAwesomeIcon icon={faDeleteLeft} /> Delete Item
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            {urls.map((url) => (
              <Suspense
                key={`${data.id}-${url}-${index}`}
                fallback={<Loading />}
              >
                <LinkPreview url={url} />
              </Suspense>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
