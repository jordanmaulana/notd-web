import React from "react";
import { Tag } from "../models/tag";
import Link from "next/link";

interface TagItemProps {
  data: Tag;
}

export default function TagItem({ data }: TagItemProps) {
  const { name, count } = data;

  return (
    <Link
      className="cursor-pointer px-4 py-2 hover:bg-slate-100/10"
      href={{
        pathname: "/home",
        query: { search: `#${name}` },
      }}
    >
      <div className="font-bold">{name}</div>
      <div className="text-sm text-placeholder">
        {count} note<span>{count > 1 ? "s" : ""}</span>
      </div>
    </Link>
  );
}
