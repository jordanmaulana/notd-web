import React from "react";
import { Tag } from "../models/tag";

interface TagItemProps {
  data: Tag;
}

export default function TagItem({ data }: TagItemProps) {
  const { name, count } = data;

  return (
    <div className="cursor-pointer px-4 py-2 hover:bg-slate-100/10">
      <div className="font-bold">{name}</div>
      <div className="text-sm text-white/50">
        {count} note<span>{count > 1 ? "s" : ""}</span>
      </div>
    </div>
  );
}
