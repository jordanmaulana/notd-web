import VAvatar from "@/components/ui/avatar";
import { getProfile } from "@/features/profile/repo/profile_repo";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default async function Page() {
  const { data } = await getProfile();

  return (
    <div className="flex w-60 items-center justify-between gap-4 rounded-full px-4 py-3 font-bold hover:bg-slate-100/10">
      <div className="flex gap-4">
        <VAvatar />
        <div>{data?.name}</div>
      </div>
      <FontAwesomeIcon icon={faEllipsis} />
    </div>
  );
}
