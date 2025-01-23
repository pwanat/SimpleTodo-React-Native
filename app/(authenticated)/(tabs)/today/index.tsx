import { View, Text } from "react-native";
import NewTaskFab from "@/components/NewTaskFab";
import MoreButton from "@/components/MoreButton";

const Page = () => {
  return (
    <View className="container flex flex-1 h-10">
      <Text>Today</Text>
      <MoreButton />
      <NewTaskFab />
    </View>
  );
};
export default Page;
