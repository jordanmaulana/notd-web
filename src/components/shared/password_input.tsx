"use client";

import React, { useState } from "react";
import InputBox from "../ui/input_box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

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
      defaultValue="admin123"
      type={obscure ? "password" : "text"}
      trailingIcon={
        <FontAwesomeIcon
          icon={obscure ? faEye : faEyeSlash}
          onClick={() => {
            setObscure(!obscure);
          }}
          className="cursor-pointer"
        />
      }
    />
  );
}
