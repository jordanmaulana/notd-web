import React from "react";
import Image from "next/image";
import { cn } from "@/lib/tailwind_utility";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <Image
      src="/logo.png"
      className={cn(["object-scale-down", props.className])}
      alt="logo"
      width={props.size ?? 64}
      height={props.size ?? 64}
    />
  );
}
