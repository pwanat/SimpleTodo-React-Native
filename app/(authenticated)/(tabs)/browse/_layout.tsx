import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Image } from "react-native";

const HeaderLeft = () => {
  const { user } = useUser();
  return <Image source={{ uri: user?.imageUrl }} className="w-8 h-8 mr-4 rounded-full" />;
};

const HeaderRight = () => {
  return <Ionicons name="settings-outline" size={24} />;
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
    </Stack>
  );
};

export default Layout;
