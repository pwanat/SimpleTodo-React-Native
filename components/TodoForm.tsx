import { StyleSheet, Text, View } from "react-native";
import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useRef,
  useState,
} from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Todo } from "@/types/todo";
import { fetchProjects } from "@/api/projects";
import { Project } from "@/types/project";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import { Input, InputField } from "./ui/input";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

type Props = {
  todo?: Todo;
};

type TodoFormInputs = {
  name: string;
  description: string;
};

const TodoForm = forwardRef(
  ({ todo }: Props, ref: ForwardedRef<BottomSheetModal>) => {
    const { data } = fetchProjects();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [selectedProject, setSelectedProject] = useState<Project>({
      id: todo?.project_id ?? 1,
      name: todo?.project_name ?? "Inbox",
      color: todo?.project_color ?? "#000",
    });

    const {
      control,
      register,
      handleSubmit,
      trigger,
      formState: { errors },
    } = useForm<TodoFormInputs>({
      defaultValues: {
        name: todo?.name ?? "",
        description: todo?.description ?? "",
      },
    });

    const onSubmit: SubmitHandler<TodoFormInputs> = (inputs) => {
      console.log(inputs);
    };

    const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index);
    }, []);

    return (
      <BottomSheetModal ref={ref} onChange={handleSheetChanges}>
        <BottomSheetView>
          <Text>Awesome 🎉</Text>

          {/* <ScrollView> */}
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="outline"
                size="md"
                className=" bg-white p-4 min-h-16"
              >
                <InputField
                  placeholder="Task name..."
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  autoFocus
                  autoCorrect={false}
                />
              </Input>
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="outline"
                size="md"
                className=" bg-white p-4 min-h-16"
              >
                <InputField
                  placeholder="Description..."
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  autoCorrect={false}
                  // multiline
                />
              </Input>
            )}
          />
          {/* </ScrollView> */}
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default TodoForm;
