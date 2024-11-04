// your-tooltip.jsx
import { cn } from "@/lib/tailwind_utility";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

type TooltipProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  content: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  className,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        delayDuration={0}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content className="z-50 m-1 flex items-center rounded-lg border border-slate-50/20 backdrop-blur">
          <div
            className={cn([
              "rounded-md px-4 py-2 text-center text-sm",
              className,
            ])}
          >
            {content}
          </div>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
