import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { Text } from "react-native";
import React from "react";

export default function Page() {
  const { user } = useUser();

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return <Redirect href="/(authenticated)/(tabs)/search" />;
}
