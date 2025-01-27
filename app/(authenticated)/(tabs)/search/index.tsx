import NewTaskFab from "@/components/NewTaskFab";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Page = () => {
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <Text>Search page</Text>
      </ScrollView>
      <NewTaskFab />
    </>
  );
};
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});