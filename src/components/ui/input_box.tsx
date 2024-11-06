import React from "react";

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  trailingIcon?: React.ReactNode;
}

export default function InputBox({ trailingIcon, ...props }: InputBoxProps) {
  return (
    <div className="relative w-full">
      <input
        {...props}
        className="w-full rounded-md border border-transparent bg-gray-900 p-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        placeholder={props.placeholder}
      />
      {trailingIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {trailingIcon}
        </div>
      )}
    </div>
  );
}
