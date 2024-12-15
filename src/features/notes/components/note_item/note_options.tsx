"use client";

import React from "react";
import { DotsHorizontalIcon, TrashIcon } from "@radix-ui/react-icons";

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
  const handleDelete = async () => {
    await deleteNoteAction(props.id);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex cursor-pointer items-center justify-center rounded-full p-2 text-placeholder hover:bg-slate-800 hover:text-blue-700">
        <DotsHorizontalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex cursor-pointer items-center gap-2 font-bold text-red-500 focus:outline-none"
          onClick={handleDelete}
        >
          <TrashIcon /> Delete Item
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
