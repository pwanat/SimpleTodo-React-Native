import NewTaskFab from "@/components/NewTaskFab";
import TodoForm from "@/components/TodoForm";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Page = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <Text>Search page</Text>
      </ScrollView>
      {/* <NewTaskFab bottomSheetModalRef={bottomSheetModalRef} />
      <TodoForm ref={bottomSheetModalRef}/> */}
    </>
  );
};
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
