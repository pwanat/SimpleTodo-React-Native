import { View, Text, SectionList, RefreshControl } from "react-native";
import NewTaskFab from "@/components/NewTaskFab";
import { drizzle, useLiveQuery } from "drizzle-orm/expo-sqlite";
import { projects, todos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Todo } from "@/types/todo";
import Animated, {
  StretchInY,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import TaskRow from "@/components/TaskRow";
import { db } from "@/db/client";


interface Section {
  title: string;
  data: Todo[];
}

const Page = () => {

  const today = format(new Date(), "d MMM · eee");
  const [sectionListData, setSectionListData] = useState<Section[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const { data } = useLiveQuery(
    db
      .select()
      .from(todos)
      .leftJoin(projects, eq(todos.project_id, projects.id))
      .where(eq(todos.completed, 0))
  );

  useEffect(() => {
    const formattedData = data?.map((item) => ({
      ...item.todos,
      project_name: item.projects?.name,
      project_color: item.projects?.color,
    }));

    // Group tasks by day
    const groupedByDay = formattedData?.reduce(
      (acc: { [key: string]: Todo[] }, task) => {
        const day = format(
          new Date(task.due_date || new Date()),
          "d MMM · eee"
        );
        if (!acc[day]) {
          acc[day] = [];
        }
        acc[day].push(task);
        return acc;
      },
      {}
    );

    // Convert grouped data to sections array
    const listData: Section[] = Object.entries(groupedByDay || {}).map(
      ([day, tasks]) => ({
        title: day,
        data: tasks,
      })
    );

    // Sort sections by date
    listData.sort((a, b) => {
      const dateA = new Date(a.data[0].due_date || new Date());
      const dateB = new Date(b.data[0].due_date || new Date());
      return dateA.getTime() - dateB.getTime();
    });

    console.log("🚀 ~ listData.sort ~ listData:", listData);

    setSectionListData(listData);
  }, [data]);

  // const loadTasks = async () => {
  //   const tasks = await db.getAllAsync<Todo>(`
  //     SELECT todos.*, projects.name as project_name
  //     FROM todos
  //     LEFT JOIN projects ON todos.project_id = projects.id
  //     WHERE todos.completed = 0
  //   `);
  //   if (tasks) {
  //     const listData = [{ title: today, data: tasks }];
  //     setSectionListData(listData);
  //   }
  //   setRefreshing(false);
  // };

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
          return <Text className="text-base font-bold p-4 border-b-hairline border-gray-300">{section.title}</Text>;
        }}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={loadTasks} />
        // }
      />
      <NewTaskFab />
    </View>
  );
};
export default Page;
