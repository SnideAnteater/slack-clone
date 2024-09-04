"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UseCurrentUser from "../hooks/UseCurrentUser";
import { Loader, LogOutIcon } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

const UserButton = () => {
  const { signOut } = useAuthActions();
  const { data, isLoading } = UseCurrentUser();
  if (isLoading) {
    return (
      <Loader className="size-4 animate-spin text-muted-foreground"></Loader>
    );
  }

  if (!data) {
    return null;
  }

  const { name, image } = data;

  const avatarFallback = name!.charAt(0).toUpperCase();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className=" outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition">
          <AvatarImage alt={name} src={image}></AvatarImage>
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="right" className="w-60">
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOutIcon className=" size-4 mr-2"></LogOutIcon>
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
