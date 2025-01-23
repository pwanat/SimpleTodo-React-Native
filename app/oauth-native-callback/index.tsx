import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React from "react";
import { Spinner } from "@/components/ui/spinner";
import colors from "tailwindcss/colors";

export default function Page() {
  const { user } = useUser();

  if (!user) {
    return <Spinner size="large" color={colors.indigo[600]} />;
  }

  return <Redirect href="/(authenticated)/(tabs)/search" />;
}
