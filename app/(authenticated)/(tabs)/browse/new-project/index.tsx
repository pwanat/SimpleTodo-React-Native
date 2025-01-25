import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Link, Stack, useRouter } from "expo-router";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { Ionicons } from "@expo/vector-icons";
import { DEFAULT_PROJECT_COLOR } from "@/constants/colors";
import { Input, InputField } from "@/components/ui/input";

const Page = () => {
  const router = useRouter();
  const [projectName, setProjectName] = useState("");
  const [selectedColor, setSelectedColor] = useState<string>(
    DEFAULT_PROJECT_COLOR
  );

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
            <TouchableOpacity
              onPress={onCreateProject}
              disabled={projectName === ""}
            >
              <Text
              // style={projectName === '' ? styles.btnTextDisabled : styles.btnText}
              >
                Create
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <View>
        <Input variant="outline" size="md">
          <InputField
            placeholder="New project name..."
            value={projectName}
            onChangeText={setProjectName}
            autoFocus
          />
        </Input>

        {/* <TextInput
          value={projectName}
          onChangeText={setProjectName}
          placeholder="Name"
          autoFocus
        /> */}

        <Link href="/browse/new-project/color-select" asChild>
          <TouchableOpacity>
            <Ionicons name="color-palette-outline" size={24} />
            <Text>Color</Text>
            <View
            // style={[styles.colorPreview, { backgroundColor: selectedColor }]}
            />
            <Ionicons name="chevron-forward" size={22} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Page;
