import { cn } from "@/lib/tailwind_utility";
import * as Avatar from "@radix-ui/react-avatar";

import React from "react";

interface VAvatarProps {
  className?: string;
}

export default function VAvatar(props: VAvatarProps) {
  return (
    <Avatar.Root className={cn(["flex-shrink-0", props.className])}>
      <Avatar.Image
        src="https://avatar.iran.liara.run/public/boy"
        className="size-10 object-cover"
      />
      <Avatar.Fallback />
    </Avatar.Root>
  );
}
