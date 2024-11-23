// your-dropdown-menu.jsx
import React, { ReactNode } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/tailwind_utility";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

interface DropdownMenuContentProps {
  children: ReactNode;
  className?: string;
}
export const DropdownMenuContent = (props: DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={cn([
          "rounded-xl border bg-inherit p-2 text-sm shadow-sm",
          props.className,
        ])}
      >
        {props.children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
};

export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
