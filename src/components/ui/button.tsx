import { cn } from "@/lib/tailwind_utility";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={cn([
        "rounded-full bg-sky-500 px-4 py-1 font-bold text-white",
        props.className,
      ])}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
