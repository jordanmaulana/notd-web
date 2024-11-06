import PasswordInput from "@/components/shared/password_input";
import InputBox from "@/components/ui/input_box";
import React from "react";
import { login } from "./action";
import Button from "@/components/ui/button";

export default function Page() {
  return (
    <div className="m-auto flex h-screen max-w-sm flex-col items-start justify-center gap-3">
      <div className="text-3xl font-bold">Save references now</div>
      <form className="flex w-full flex-col gap-3" action={login}>
        <InputBox
          placeholder="Email"
          name="email"
          defaultValue="demo@gmail.com"
        />
        <PasswordInput />
        <div className="m-1" />
        <Button>Login</Button>
      </form>
    </div>
  );
}
