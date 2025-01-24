import { View, Text } from "react-native";
import NewTaskFab from "@/components/NewTaskFab";
import { useSQLiteContext } from "expo-sqlite";
import { drizzle, useLiveQuery } from "drizzle-orm/expo-sqlite";
import { todos } from "@/db/schema";

const Page = () => {

  const db = useSQLiteContext();
  const drizzleDB = drizzle(db);
  
  const { data } = useLiveQuery(drizzleDB.select().from(todos));

  return (
    <View className="container flex flex-1 h-10">
      <Text>Today</Text>
      <NewTaskFab />
    </View>
  );
};
export default Page;
