"use client";

import VSwitch from "@/components/ui/switch";
import React, { useState } from "react";

export default function NotePrivacy() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex items-center gap-3">
      <div className="text-sm text-sky-500">
        {checked ? "Private" : "Public"}
      </div>
      <VSwitch
        name="isPrivate"
        checked={checked}
        onCheckedChange={setChecked}
      />
    </div>
  );
}
