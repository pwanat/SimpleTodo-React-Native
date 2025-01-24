import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "@/utils/cache";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from "sonner-native";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { Suspense, useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import colors from "tailwindcss/colors";
import { drizzle, useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../drizzle/migrations";
import { useSQLiteContext } from "expo-sqlite";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { todos } from "@/db/schema";

const InitialLayout = () => {
  const db = useSQLiteContext();
  useDrizzleStudio(db);
  const drizzleDB = drizzle(db);
  
  return (
    <Stack>
      <Stack.Screen
        name="oauth-native-callback"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
  }
  const expoDB = openDatabaseSync('todos.db',  { enableChangeListener: true });
  const db = drizzle(expoDB);
  const { success, error } = useMigrations(db, migrations);

  // useEffect(() => {
  //   if (!db || !success) {
  //     return;
  //   }
  //   seedDB(db);
  // }, [db, success]);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
          <ClerkLoaded>
            <Suspense
              fallback={<Spinner size="large" color={colors.indigo[600]} />}
            >
              <SQLiteProvider
                databaseName="todos.db"
                useSuspense
                options={{ enableChangeListener: true }}
              >
                <GluestackUIProvider mode="light">
                  <InitialLayout />
                  <Toaster />
                </GluestackUIProvider>
              </SQLiteProvider>
            </Suspense>
          </ClerkLoaded>
        </ClerkProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
