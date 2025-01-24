import { db, expoDb } from "@/db/client";
import migrations from "@/drizzle/migrations";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
// import { useFonts } from "expo-font"
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export function useInitApp() {
  // const [hasLoadedFonts, loadingFontsError] = useFonts({
  // 	SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // 	...FontAwesome.font,
  // })

  const { success: hasRunMigrations, error: runningMigrationError } =
    useMigrations(db, migrations);

  useDrizzleStudio(expoDb);

  useEffect(() => {
    if (runningMigrationError) throw runningMigrationError;
  }, [runningMigrationError]);

  useEffect(() => {
    if (hasRunMigrations) {
      SplashScreen.hideAsync();
    }
  }, [hasRunMigrations]);

  return { isLoaded: hasRunMigrations };
}
