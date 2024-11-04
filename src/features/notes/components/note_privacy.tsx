"use client";

import VSwitch from "@/components/ui/switch";
import { cn } from "@/lib/tailwind_utility";
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
      <div className={textStyle}>{checked ? "Private" : "Public"}</div>
      <VSwitch
        name="isPrivate"
        checked={checked}
        onCheckedChange={setChecked}
      />
    </div>
  );
}
