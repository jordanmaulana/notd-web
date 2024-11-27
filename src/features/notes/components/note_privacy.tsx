"use client";

import VSwitch from "@/components/ui/switch";
import { Tooltip } from "@/components/ui/tooltip";
import { caption } from "@/lib/captions";
import { cn } from "@/lib/tailwind_utility";
import React, { useState } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function NotePrivacy() {
  const [checked, setChecked] = useState(true);

  const textStyle = cn([
    "text-sm",
    {
      "text-sky-500": checked,
    },
  ]);

  return (
    <div className="flex items-center gap-3">
      <Tooltip content={caption.noteInput.privacyHelp}>
        <InfoCircledIcon className="text-amber-400" />
      </Tooltip>
      <div className={textStyle}>{checked ? "Private" : "Public"}</div>
      <VSwitch
        name="isPrivate"
        checked={checked}
        onCheckedChange={setChecked}
      />
    </div>
  );
}
