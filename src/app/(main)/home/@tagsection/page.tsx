import TagItem from "@/features/tags/components/tag_item";
import { dummyTags } from "@/features/tags/models/tag";
import React from "react";

export default function Page() {
  return (
    <div className="vborder flex w-96 flex-col rounded-2xl border">
      <div className="p-4 text-xl font-bold">Your Tags</div>
      {dummyTags.map((tag) => {
        return <TagItem key={tag.id} data={tag} />;
      })}
    </div>
  );
}
