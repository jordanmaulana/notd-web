import React from "react";

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  trailingIcon?: React.ReactNode;
}

export default function InputBox({ trailingIcon, ...props }: InputBoxProps) {
  return (
    <div className="relative w-full">
      <input
        {...props}
        className="w-full rounded-md border border-gray-200 bg-white p-3 
                   text-gray-900 outline-none 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                   dark:border-transparent dark:bg-gray-900 dark:text-white"
        placeholder={props.placeholder}
      />
      {trailingIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 
                      text-gray-400 dark:text-gray-500">
          {trailingIcon}
        </div>
      )}
    </div>
  );
}