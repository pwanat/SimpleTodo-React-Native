import { Fab, FabIcon } from "@/components/ui/fab";
import { AddIcon } from "@/components/ui/icon";
import React from "react";
import { View, Text } from "react-native";

const Page = () => {
  return (
    <View className="container flex flex-1">
      <Text>Today</Text>
      <Fab size="lg" placement="bottom right" className="m-5 bg-indigo-500">
        <FabIcon as={AddIcon} size="md" />
      </Fab>
    </View>
  );
};
export default Page;

