import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { Ionicons } from "@expo/vector-icons";
import { DEFAULT_PROJECT_COLOR } from "@/constants/colors";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { ChevronRightIcon, Icon } from "@/components/ui/icon";

const Page = () => {
  const router = useRouter();
  const { bg } = useGlobalSearchParams<{ bg?: string }>();
  const [projectName, setProjectName] = useState("");
  const [selectedColor, setSelectedColor] = useState<string>(
    DEFAULT_PROJECT_COLOR
  );

  useEffect(() => {
    if (bg) {
      setSelectedColor(bg);
    }
  }, [bg]);

  const onCreateProject = async () => {
    await db.insert(projects).values({
      name: projectName,
      color: selectedColor,
    });
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
            <Ionicons name="color-palette-outline" size={24} />
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
