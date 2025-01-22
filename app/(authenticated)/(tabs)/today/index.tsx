// import Fab from "@/components/Fab";
// import { Fab, FabIcon } from "@/components/ui/fab";
import { AddIcon } from "@/components/ui/icon";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Page = () => {
  return (
    <View className="container flex">
      <Text>Today</Text>
      {/* <Fab size="sm" placement="bottom right" className="">
        <FabIcon as={AddIcon} size="sm" />
      </Fab> */}
    </View>
  );
};
export default Page;

