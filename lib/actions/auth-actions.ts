"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export const signUp = async (email: string, password: string, name: string) => {
  return await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
      callbackURL: "/dashboard",
    },
    headers: await headers(),
  });
};

export const signIn = async (email: string, password: string) => {
  return await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL: "/dashboard",
    },
    headers: await headers(),
  });
};

export const signInSocial = async (provider: "google") => {
  return await auth.api.signInSocial({
    body: {
      provider,
      callbackURL: "/dashboard",
    },
    headers: await headers(),
  });
};

export const signOut = async () => {
  const result = await auth.api.signOut({ headers: await headers() });
  return result;
};
