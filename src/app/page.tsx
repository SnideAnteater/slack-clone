"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/UserButton";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <main>
      Logged In
      <UserButton></UserButton>
      {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
    </main>
  );
}
