import NewTaskFab from "@/components/NewTaskFab";
import TodoForm from "@/components/TodoForm";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { View, Text } from "react-native";

const Page = () => {

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  
  return (
    <View className="container flex flex-1">
      <Text>Upcoming</Text>
      {/* <NewTaskFab bottomSheetModalRef={bottomSheetModalRef} />
      <TodoForm ref={bottomSheetModalRef}/> */}
    </View>
  );
};
export default Page;
