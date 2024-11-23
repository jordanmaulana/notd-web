"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown_menu";
import { deleteNoteAction } from "../../actions/delete_note";

interface NoteOptionsProps {
  id: string;
}

export default function NoteOptions(props: NoteOptionsProps) {
  return (
    <form action={deleteNoteAction}>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex cursor-pointer items-center justify-center rounded-full p-2 text-placeholder hover:bg-slate-800 hover:text-blue-700">
          <FontAwesomeIcon icon={faEllipsis} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <input hidden value={props.id} readOnly />
            <button className="flex cursor-pointer items-center gap-2 font-bold text-red-500 focus:outline-none">
              <FontAwesomeIcon icon={faDeleteLeft} /> Delete Item
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </form>
  );
}
