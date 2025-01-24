import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { useAuth } from "@clerk/clerk-expo";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { View, Text, Button } from "react-native";

const Page = () => {
    const { signOut } = useAuth();

    const { data } = useLiveQuery(db.select().from(projects));
    return (
        <View>
            <Text>Page</Text>
            <Button title='Sign Out' onPress={() => signOut()} />
        </View>
    )
}
export default Page;