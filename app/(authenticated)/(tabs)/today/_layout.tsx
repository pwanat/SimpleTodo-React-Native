import MoreButton from "@/components/MoreButton";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={
        {
          // headerShadowVisible: false,
        }
      }
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Today",
          headerLargeTitle: true,
          headerRight: () => <MoreButton pageName="today"/>,
        }}
      />
    </Stack>
  );
};
export default Layout;
