"use client";
import { caption } from "@/lib/captions";

import React from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function NoteInput() {
  return (
    <TextareaAutosize
      className="resize-none border-none bg-transparent focus:outline-none focus:ring-0"
      placeholder={caption.noteInput.placeholder}
      name="content"
    />
  );
}
