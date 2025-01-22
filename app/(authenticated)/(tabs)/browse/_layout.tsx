import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Image } from "react-native";

const HeaderLeft = () => {
  const { user } = useUser();
  return <Image source={{ uri: user?.imageUrl }} style={styles.image} />;
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

const styles = {
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 16,
  },
};
export default Layout;
