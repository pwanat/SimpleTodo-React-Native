import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link, Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { ChevronRightIcon, Icon } from "@/components/ui/icon";
import useNewProjectStore from "@/stores/new-project-store";
import { createProject } from "@/api/projects";
import { Palette } from "lucide-react-native";

const Page = () => {
  const router = useRouter();
  const [projectName, setProjectName] = useState("");
  const selectedColor = useNewProjectStore((state) => state.selectedColor);
  const resetSelectedColor = useNewProjectStore(
    (state) => state.resetSelectedColor
  );

  const onCreateProject = async () => {
    const newProject = {
      name: projectName,
      color: selectedColor,
    };

    createProject(newProject);
    resetSelectedColor(); // TODO: This store should be context to this index.tsx file, so the colors resets every time we start new project
    router.dismiss();
  };

  return (
    <View>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              onPress={onCreateProject}
              isDisabled={!projectName}
              variant="link"
            >
              <ButtonText>Create</ButtonText>
            </Button>
          ),
        }}
      />

      <View className="container flex flex-col p-4 gap-2 ">
        <Input variant="outline" size="md" className=" bg-white p-4 min-h-16">
          <InputField
            placeholder="New project name..."
            value={projectName}
            onChangeText={setProjectName}
            autoFocus
          />
        </Input>

        <Link href="/browse/new-project/color-select" asChild>
          <TouchableOpacity className="flex-row items-center  gap-2 p-4 min-h-16 border border-background-300 bg-white">
            <Icon as={Palette} size="xl" />
            <Text className="flex-1">Color</Text>
            <View
              className="w-6 h-6 rounded-full border border-background-300"
              style={{ backgroundColor: selectedColor }}
            />
            <Icon as={ChevronRightIcon} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Page;
