"use client";
import { caption } from "@/lib/captions";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function NoteInput() {
  return (
    <TextareaAutosize
      className="resize-none border-none bg-transparent py-2 text-xl 
                text-gray-900 placeholder-gray-400 
                focus:outline-none focus:ring-0
                dark:text-white dark:placeholder-gray-500"
      placeholder={caption.noteInput.placeholder}
      name="content"
    />
  );
}