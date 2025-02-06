import { Redirect, Stack, useRouter } from "expo-router";
import { useWindowDimensions, Text, View } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import NewTaskFab from "@/components/NewTaskFab";
import TodoForm from "@/components/TodoForm";
import { useRef } from "react";

const Layout = () => {
  //   const { height } = useWindowDimensions();
  //   const router = useRouter();
  const { isSignedIn } = useAuth();
  const { height } = useWindowDimensions();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  if (!isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <BottomSheetModalProvider>
      <Stack screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen
        name="task/new"
        options={{
          presentation: "formSheet",
          headerShown: false,
          // sheetAllowedDetents: height > 700 ? [0.42] : "fitToContents",
          sheetGrabberVisible: true,
          sheetExpandsWhenScrolledToEdge: true,
          sheetCornerRadius: 10,
        }}
      /> */}
        <Stack.Screen
          name="task/[id]"
          options={{
            presentation: "formSheet",
            headerShown: false,
            sheetAllowedDetents: height > 700 ? [0.22] : "fitToContents",
            sheetGrabberVisible: false,
            sheetExpandsWhenScrolledToEdge: false,
            sheetCornerRadius: 10,
          }}
        />

        {/* <Stack.Screen
        name="task/[id]"
        options={{
          title: '',
          presentation: 'formSheet',
          sheetAllowedDetents: height > 700 ? [0.22] : 'fitToContents',
          sheetGrabberVisible: false,
          sheetCornerRadius: 10,
          headerShown: false,
          sheetExpandsWhenScrolledToEdge: false,
        }}
      />
      <Stack.Screen
        name="task/new"
        options={{
          title: '',
          presentation: 'formSheet',
          sheetAllowedDetents: height > 700 ? [0.22] : 'fitToContents',
          sheetGrabberVisible: false,
          sheetCornerRadius: 10,
          headerShown: false,
          sheetExpandsWhenScrolledToEdge: false,
        }}
      />
      <Stack.Screen
        name="task/date-select"
        options={{
          title: 'Schedule',
          presentation: 'formSheet',
          sheetAllowedDetents: height > 700 ? [0.6, 0.9] : 'fitToContents',
          sheetGrabberVisible: true,
          sheetCornerRadius: 10,
          sheetExpandsWhenScrolledToEdge: false,
          unstable_sheetFooter: () => <View style={{ height: 400, backgroundColor: '#fff' }} />,
          headerLeft: () => (
            <Button title="Cancel" onPress={() => router.back()} color={Colors.primary} />
          ),
        }}
      /> */}
        <Stack.Screen
          name="(modals)/new-task"
          options={{
            presentation: "modal",
            title: "New Taskbb",
            headerTransparent: true,
            headerBlurEffect: "regular",
            // headerStyle: {
            //   backgroundColor: Colors.background,
            // },
            // headerRight: () => (
            //   <Link href={'/(tabs)/chats'} asChild>
            //     <TouchableOpacity
            //       style={{ backgroundColor: Colors.lightGray, borderRadius: 20, padding: 4 }}>
            //       <Ionicons name="close" color={Colors.gray} size={30} />
            //     </TouchableOpacity>
            //   </Link>
            // ),
            // headerSearchBarOptions: {
            //   placeholder: 'Search name or number',
            //   hideWhenScrolling: false,
            // },
          }}
        />
      </Stack>
      <NewTaskFab bottomSheetModalRef={bottomSheetModalRef} />
      <TodoForm ref={bottomSheetModalRef}/>
    </BottomSheetModalProvider>
  );
};
export default Layout;
