"use client";

import VSwitch from "@/components/ui/switch";
import { Tooltip } from "@/components/ui/tooltip";
import { caption } from "@/lib/captions";
import { cn } from "@/lib/tailwind_utility";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

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
        <FontAwesomeIcon icon={faCircleQuestion} />
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
