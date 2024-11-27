import React from "react";
import { Profile } from "../models/profile";
import { logout } from "@/app/(main)/home/@profile/action";
import VAvatar from "@/components/ui/avatar";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

interface ProfileItemProps {
  data: Profile;
}

export default function ProfileItem({ data }: ProfileItemProps) {
  return (
    <div
      className="flex w-60 cursor-pointer items-center justify-between gap-4 rounded-full px-4 py-3 font-bold hover:bg-slate-100/10"
      onClick={logout}
    >
      <div className="flex gap-4">
        <VAvatar />
        <div>{data?.name}</div>
      </div>
      <DotsHorizontalIcon />
    </div>
  );
}
