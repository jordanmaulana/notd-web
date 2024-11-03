import * as Avatar from "@radix-ui/react-avatar";

import React from "react";

export default function VAvatar() {
  return (
    <Avatar.Root className="flex-shrink-0">
      <Avatar.Image
        src="https://avatar.iran.liara.run/public/boy"
        className="size-10 object-cover"
      />
      <Avatar.Fallback />
    </Avatar.Root>
  );
}
