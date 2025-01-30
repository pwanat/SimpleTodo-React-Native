import React from "react";
import { Stack, useRouter } from "expo-router";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ChevronLeftIcon } from "@/components/ui/icon";

export default function Layout() {
  const router = useRouter();
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          title: "New Project",
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Button
              variant="link"
              onPress={() => router.dismiss()}
              className="mr-4 flex items-center pt-1"
            >
              <ButtonIcon as={ChevronLeftIcon} />
              <ButtonText>Cancel</ButtonText>
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="color-select"
        options={{
          title: "Color",
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}
