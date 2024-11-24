import { cn } from "@/lib/tailwind_utility";
import { ComponentPropsWithRef, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={cn([
        "rounded-full px-4 py-1 font-bold text-white",
        props.disabled ? "bg-sky-500/50" : "bg-sky-500",
        props.className,
      ])}
      {...props}
    >
      {props.children}
    </button>
  );
}
