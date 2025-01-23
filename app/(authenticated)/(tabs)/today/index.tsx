import { View, Text } from "react-native";
import NewTaskFab from "@/components/NewTaskFab";
import { useSQLiteContext } from "expo-sqlite";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";

const Page = () => {

  const db = useSQLiteContext();
  useDrizzleStudio(db);
  return (
    <View className="container flex flex-1 h-10">
      <Text>Today</Text>
      <NewTaskFab />
    </View>
  );
};
export default Page;
