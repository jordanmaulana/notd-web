"use client";

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value.trim()) {
      router.push(`/home?search=${encodeURIComponent(value)}`);
    }
  };

  return (
    <div className="text-placeholder flex h-11 w-80 items-center rounded-full border border-[#202327] bg-[#202327] px-3 focus-within:border-blue-500 focus-within:bg-black focus-within:text-blue-500">
      <span className="pl-3">
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        className="placeholder-placeholder flex-1 border-none bg-transparent px-3 text-white outline-none"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
      />
      {value != "" && (
        <span className="cursor-pointer pr-3" onClick={() => setValue("")}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
      )}
    </div>
  );
}
