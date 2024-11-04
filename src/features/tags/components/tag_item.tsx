import React from "react";
import { Tag } from "../models/tag";

interface TagItemProps {
  data: Tag;
}

export default function TagItem({ data }: TagItemProps) {
  const { name, total } = data;

  return (
    <div className="cursor-pointer px-4 py-2 hover:bg-slate-100/10">
      <div className="font-bold">{name}</div>
      <div className="text-sm text-white/50">{total} notes</div>
    </div>
  );
}
