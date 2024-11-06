"use client";

import React, { useState } from "react";
import InputBox from "../ui/input_box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function PasswordInput() {
  const [obscure, setObscure] = useState(true);

  return (
    <InputBox
      name="password"
      placeholder="Password"
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
