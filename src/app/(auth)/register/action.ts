"use server";

import { API_URL } from "@/config/api_url";

export async function signup(
  _prevState: unknown,
  form: FormData,
): Promise<{
  code: number;
  message: string;
}> {
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const name = form.get("name") as string;
  // const passwordConfirmation = form.get("passwordConfirmation") as string;

  const res = await fetch(`${API_URL}/v1/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });

  if (res.status == 201) {
    return {
      code: res.status,
      message: "Sign up success, please sign in",
    };
  } else {
    return {
      code: res.status,
      message: await res.json(),
    };
  }
}
