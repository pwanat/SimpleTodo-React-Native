import { View, Text, SectionList, RefreshControl } from "react-native";
import NewTaskFab from "@/components/NewTaskFab";
import Animated, {
  StretchInY,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import TaskRow from "@/components/TaskRow";
import useTodayList from "@/hooks/use-today-list";

const Page = () => {
  const { sectionListData, refreshing, loadTasks } = useTodayList();

  return (
    <View className="container flex flex-1 h-10">
      <SectionList
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        sections={sectionListData}
        renderItem={({ item }) => (
          <LayoutAnimationConfig>
            <Animated.View entering={StretchInY}>
              <TaskRow task={item} />
            </Animated.View>
          </LayoutAnimationConfig>
        )}
        renderSectionHeader={({ section }) => {
          return (
            <Text className="text-base font-bold p-4 border-b-hairline border-gray-300">
              {section.title}
            </Text>
          );
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadTasks} />
        }
      />
      <NewTaskFab />
    </View>
  );
};
export default Page;
