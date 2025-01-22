import { Fab, FabIcon } from "@/components/ui/fab";
import { AddIcon } from "@/components/ui/icon";
import { toast } from "sonner-native";
import { View, Text } from "react-native";

const Page = () => {
  const onPress = () => {
    toast.success("Fab clicked");
  };

  return (
    <View className="container flex flex-1">
      <Text>Today</Text>
      <Fab
        size="lg"
        placement="bottom right"
        className="m-5 bg-indigo-500"
        onPress={onPress}
      >
        <FabIcon as={AddIcon} size="md" />
      </Fab>
    </View>
  );
};
export default Page;
