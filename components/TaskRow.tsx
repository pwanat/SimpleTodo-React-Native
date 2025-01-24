import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Todo } from "@/types/todo";
import { Link } from "expo-router";
import colors from "tailwindcss/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { todos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";

type Props = {
  task: Todo;
};

const TaskRow = ({ task }: Props) => {

    const markAsCompleted = async (checked: boolean) => {
        await db.update(todos).set({ completed: checked ? 1 : 0, date_completed: Date.now() }).where(eq(todos.id, task.id));
    }

  return (
    <View className="container">
      <Link
        className="container p-4 border-b-hairline border-gray-300"
        href={{
          pathname: "/task/[id]",
          params: { id: task.id },
        }}
        asChild
      >
        <TouchableOpacity>
          <View className="flex flex-row items-center gap-4">
            <BouncyCheckbox
              size={25}
              fillColor={colors.indigo[500]}
              isChecked={task.completed === 1}
              textContainerStyle={{ display: "none" }}      
              onPress={markAsCompleted}      
            />
               <Text className="font-semibold">{task.name}</Text>
          </View>
        <Text className='text-xs self-end'>{task.project_name}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default TaskRow;
