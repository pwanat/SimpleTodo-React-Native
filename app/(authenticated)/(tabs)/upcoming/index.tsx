import NewTaskFab from "@/components/NewTaskFab";
import { View, Text } from "react-native";

const Page = () => {

  return (
    <View className="container flex flex-1">
      <Text>Upcoming</Text>
      <NewTaskFab />
    </View>
  );
};
export default Page;
