"use client";

import React, { useState } from "react";
import InputBox from "../ui/input_box";
import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons";

interface PasswordInputProps {
  name: string;
  placeholder: string;
}

export default function PasswordInput(props: PasswordInputProps) {
  const [obscure, setObscure] = useState(true);

  return (
    <InputBox
      name={props.name}
      placeholder={props.placeholder}
      type={obscure ? "password" : "text"}
      trailingIcon={
        <div
          className="cursor-pointer"
          onClick={() => {
            setObscure(!obscure);
          }}
        >
          {obscure ? <EyeOpenIcon /> : <EyeNoneIcon />}
        </div>
      }
    />
  );
}
