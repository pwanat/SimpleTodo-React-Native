import NewTaskFab from "@/components/NewTaskFab";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { AddIcon, Icon, TrashIcon } from "@/components/ui/icon";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { useAuth } from "@clerk/clerk-expo";

import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from "@/components/ui/menu";
import { eq } from "drizzle-orm";
import Animated, { LinearTransition } from "react-native-reanimated";
import { fetchProjects } from "@/api/projects";
import { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import TodoForm from "@/components/TodoForm";


const Page = () => {
  const { signOut } = useAuth();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  
  const { data } = fetchProjects();

  const deleteProject = async (id: number) => {
    await db.delete(projects).where(eq(projects.id, id));
  };

  return (
    <View className="container flex flex-1 p-6">
      <View className="flex-row justify-between">
        <Text className="text-xl font-bold">My Projects</Text>
        <Link href="/(authenticated)/(tabs)/browse/new-project">
          <Icon as={AddIcon} size="xl" />
        </Link>
      </View>
      <Animated.FlatList
        className="py-4"
        itemLayoutAnimation={LinearTransition}
        data={data}
        renderItem={({ item }) => (
          <Menu
            offset={-48}
            placement="bottom left"
            trigger={({ ...triggerProps }) => {
              return (
                <TouchableOpacity
                  {...triggerProps}
                  className="flex-row gap-2 bg-white p-4 rounded-md"
                >
                  <Text style={{ color: item.color }}>#</Text>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          >
            <MenuItem
              key="delete"
              textValue="Delete"
              className="p-2 web:min-w-[294px] min-w-[225px]"
              onPress={() => {
                deleteProject(item.id);
              }}
            >
              <Icon as={TrashIcon} size="sm" className="mr-2" />
              <MenuItemLabel size="sm">Delete</MenuItemLabel>
            </MenuItem>
            <MenuSeparator />
            <MenuItem key="Orders" textValue="Orders" className="p-2">
              <MenuItemLabel size="sm">Orders</MenuItemLabel>
            </MenuItem>
          </Menu>
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <Divider className="my-0.5" />}
        ListFooterComponent={
          <Button
            variant="outline"
            onPress={() => signOut()}
            className="mt-4"
            action="primary"
          >
            <Text>Sign out</Text>
          </Button>
        }
      />

      {/* <NewTaskFab bottomSheetModalRef={bottomSheetModalRef} />
      <TodoForm ref={bottomSheetModalRef}/> */}
    </View>
  );
};
export default Page;
