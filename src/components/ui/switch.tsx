import React from "react";
import * as Switch from "@radix-ui/react-switch";

interface VSwitchProps {
  name?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export default function VSwitch(props: VSwitchProps) {
  return (
    <Switch.Root
      className="shadow-blackA4 relative h-[20px] w-[36px] cursor-pointer rounded-full bg-slate-600 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-sky-600"
      name={props.name}
      checked={props.checked}
      onCheckedChange={props.onCheckedChange}
    >
      <Switch.Thumb className="shadow-blackA4 block size-[18px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
    </Switch.Root>
  );
}
