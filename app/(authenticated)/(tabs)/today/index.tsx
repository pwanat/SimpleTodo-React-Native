import { View, Text } from "react-native";
import NewTaskFab from "@/components/NewTaskFab";

const Page = () => {
  return (
    <View className="container flex flex-1 h-10">
      <Text>Today</Text>
      <NewTaskFab />
    </View>
  );
};
export default Page;
