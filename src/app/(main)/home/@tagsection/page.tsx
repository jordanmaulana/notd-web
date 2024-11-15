import TagItem from "@/features/tags/components/tag_item";
import { getTags } from "@/features/tags/repo/tag_repo";

import React from "react";

type PageProps = {
  searchParams?: {
    search?: string;
  };
};

export default async function Page({ searchParams }: PageProps) {
  const search = searchParams?.search;

  const { data } = await getTags({ search });

  return (
    <div className="vborder flex w-80 flex-col rounded-2xl border">
      <div className="p-4 text-xl font-bold">Your Tags</div>
      {data?.map((tag, index) => {
        return <TagItem key={index} data={tag} />;
      })}
    </div>
  );
}
