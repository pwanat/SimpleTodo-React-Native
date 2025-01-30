import { useUser } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { Image } from "react-native";
import { Settings } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";

const HeaderLeft = () => {
  const { user } = useUser();
  return (
    <Image
      source={{ uri: user?.imageUrl }}
      className="w-8 h-8 mr-4 rounded-full"
    />
  );
};

const HeaderRight = () => {
  return <Icon as={Settings} size='xl' />;
};

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Browse",
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: "Tasks, Projects and more",
          },          
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen
        name="new-project"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
