"use client";

import PasswordInput from "@/components/shared/password_input";
import Button from "@/components/ui/button";
import InputBox from "@/components/ui/input_box";
import React, { useActionState, useEffect } from "react";
import { signup } from "./action";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [state, action, isPending] = useActionState(signup, null);

  useEffect(() => {
    if (!state) return;

    if (state?.code == 201) {
      toast.success(state.message);
      router.push("/home");
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <div className="m-auto flex h-screen max-w-sm flex-col items-start justify-center gap-3">
      <div className="text-3xl font-bold">Sign Up</div>
      <form className="flex w-full flex-col gap-3" action={action}>
        <InputBox
          placeholder="Email: example@gmail.com"
          name="email"
          defaultValue="demo2@gmail.com"
        />
        <InputBox
          placeholder="Name: Rudy Tabootie"
          name="name"
          defaultValue="Jordan Maulana2"
        />
        <PasswordInput name="password" placeholder="Password" />
        <PasswordInput
          name="passwordConfirmation"
          placeholder="Password Confirmation"
        />
        <div className="m-1" />
        <Button disabled={isPending}>Sign Up</Button>
        <div className="flex justify-center gap-2">
          <span>Already have account? </span>
          <Link className="text-sky-500 hover:underline" href={"/login"}>
            Sign in here
          </Link>
        </div>
      </form>
    </div>
  );
}
