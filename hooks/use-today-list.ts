import { useEffect, useState } from "react";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { projects, todos } from "@/db/schema";
import { format } from "date-fns";
import { Todo } from "@/types/todo";
import { fetchIncompleteTodos } from "@/api/todos";

type Section = {
  title: string;
  data: Todo[];
};

type DBTodos = typeof todos.$inferSelect;
type DBProjects = typeof projects.$inferSelect;
type DBIncompleteTodosResult = Array<{
  todos: DBTodos | null;
  projects: DBProjects | null;
}>;

const mapTodayList = (data: DBIncompleteTodosResult | null): Section[] => {
  const formattedData = data?.map((item) => ({
    ...item.todos,
    project_name: item.projects?.name,
    project_color: item.projects?.color,
  }));

  // Group tasks by day
  const groupedByDay = formattedData?.reduce(
    (acc: { [key: string]: Todo[] }, task) => {
      if (!task.id) return acc;
      const day = format(new Date(task.due_date || new Date()), "d MMM · eee");
      if (!acc[day]) {
        acc[day] = [];
      }
      if (task.id !== undefined) {
        acc[day].push(task as Todo);
      }
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
  const sortedListData = listData.sort((a, b) => {
    const dateA = new Date(a.data[0].due_date || new Date());
    const dateB = new Date(b.data[0].due_date || new Date());
    return dateA.getTime() - dateB.getTime();
  });
  return sortedListData;
};

const useTodayList = () => {
  const [sectionListData, setSectionListData] = useState<Section[]>([]);
  const [refetch, setRefetch] = useState<number>(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // Very poor api for useLiveQuery provided - no enabled, no isFetching
  const { data } = useLiveQuery(fetchIncompleteTodos(), [refetch]);

  useEffect(() => {
    const listData = mapTodayList(data);
    setSectionListData(listData);
    setIsFetching(false);
  }, [data]);

  const loadTasks = async () => {
    setRefetch((prev) => prev + 1);
    setIsFetching(true);
  };

  return { sectionListData, refreshing: isFetching, loadTasks };
};

export default useTodayList;
