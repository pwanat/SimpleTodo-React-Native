import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "@/utils/cache";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
          <ClerkLoaded>
            <GluestackUIProvider mode="light">
              <Stack />
            </GluestackUIProvider>
          </ClerkLoaded>
        </ClerkProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
