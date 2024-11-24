import PasswordInput from "@/components/shared/password_input";
import InputBox from "@/components/ui/input_box";
import React from "react";
import { login } from "./action";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="m-auto flex h-screen max-w-sm flex-col items-start justify-center gap-3">
      <div className="text-3xl font-bold">Sign in</div>
      <form className="flex w-full flex-col gap-3" action={login}>
        <InputBox
          placeholder="Email"
          name="email"
          defaultValue="demo@gmail.com"
        />
        <PasswordInput name="password" placeholder="Password" />
        <div className="m-1" />
        <Button>Login</Button>
        <div className="flex justify-center gap-2">
          <span>Don&apos;t have account? </span>
          <Link className="text-sky-500 hover:underline" href={"/register"}>
            Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
}
