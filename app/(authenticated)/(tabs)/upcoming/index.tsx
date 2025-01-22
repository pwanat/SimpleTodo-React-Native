// import Fab from "@/components/Fab";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Page = () => {

  return (
    <View style={[styles.container]}>
      <Text>Upcoming</Text>
      {/* <Fab /> */}
    </View>
  );
};
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 16,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    padding: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: Colors.lightBorder,
  },
});