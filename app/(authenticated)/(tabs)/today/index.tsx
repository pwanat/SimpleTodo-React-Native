import { Fab, FabIcon } from "@/components/ui/fab";
import { AddIcon } from "@/components/ui/icon";
import { toast } from "sonner-native";
import { View, Text } from "react-native";
import NewTaskFab from "@/components/NewTaskFab";

const Page = () => {
  const onPress = () => {
    toast.success("Fab clicked");
  };

  return (
    <View className="container flex flex-1">
      <Text>Today</Text>
      <NewTaskFab />
    </View>
  );
};
export default Page;
