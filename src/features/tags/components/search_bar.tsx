"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value.trim()) {
      router.push(`/home?search=${encodeURIComponent(value)}`);
    }
  };

  const onClear = () => {
    router.push(`/home`);
    setValue("");
  };

  useEffect(() => {
    const search = searchParams.get("search");
    setValue(search ?? "");
  }, [searchParams]);

  return (
    <div className="flex h-11 w-80 items-center rounded-full border border-[#202327] bg-[#202327] px-3 text-placeholder focus-within:border-blue-500 focus-within:bg-black focus-within:text-blue-500">
      <span className="pl-3">
        <MagnifyingGlassIcon />
      </span>
      <input
        className="flex-1 border-none bg-transparent px-3 text-white placeholder-placeholder outline-none"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
      />
      {value != "" && (
        <span className="cursor-pointer pr-3" onClick={onClear}>
          <CrossCircledIcon />
        </span>
      )}
    </div>
  );
}
