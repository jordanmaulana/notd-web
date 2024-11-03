import VAvatar from "@/components/ui/avatar";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Page() {
  return (
    <div className="font-bold hover:bg-slate-100/10 px-4 py-3 rounded-full flex gap-4 w-60 items-center justify-between">
      <div className="flex gap-4">
        <VAvatar />
        <div>user name</div>
      </div>
      <FontAwesomeIcon icon={faEllipsis} />
    </div>
  );
}
