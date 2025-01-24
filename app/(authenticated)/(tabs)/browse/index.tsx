import NewTaskFab from "@/components/NewTaskFab";
import { Button } from "@/components/ui/button";
import { AddIcon, Icon } from "@/components/ui/icon";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { useAuth } from "@clerk/clerk-expo";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { Link } from "expo-router";
import { View, Text } from "react-native";

const Page = () => {
  const { signOut } = useAuth();

  const { data } = useLiveQuery(db.select().from(projects));
  return (
    <View className="container flex flex-1 p-6">
      <View className="flex-row justify-between flex-1">
        <Text className="text-xl font-bold">My Projects</Text>
        <Link href="/(authenticated)/(tabs)/browse/new-project">
          <Icon as={AddIcon} size="xl" />
        </Link>
      </View>
      <Button variant='outline' onPress={() => signOut()} className="mb-24" action="primary">
        <Text>Sign out</Text>
      </Button>
      <NewTaskFab />
    </View>
  );
};
export default Page;
