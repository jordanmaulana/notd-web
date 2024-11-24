"use server";

import { API_URL } from "@/config/api_url";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signup(form: FormData) {
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const name = form.get("name") as string;
  const passwordConfirmation = form.get("passwordConfirmation") as string;

  const res = await fetch(`${API_URL}/v1/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (res.status == 200) {
    const data = await res.json();
    (await cookies()).set({ name: "sessionId", value: data.sessionId });
  }

  redirect("/home");
}