import { getProfile } from "@/features/profile/repo/profile_repo";
import React from "react";
import ProfileItem from "@/features/profile/components/profile_item";

export default async function Page() {
  const { data, error } = await getProfile();

  if (error) return <>{error}</>;
  return <ProfileItem data={data!} />;
}
