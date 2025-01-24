import { Redirect, Stack, useRouter } from "expo-router";
import { useWindowDimensions, Text, View } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

const Layout = () => {
  //   const { height } = useWindowDimensions();
  //   const router = useRouter();
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name='task/new' options={{ presentation: 'modal' }} />
      <Stack.Screen name='task/[id]' options={{ presentation: 'modal' }} /> */}
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
    </Stack>
  );
};
export default Layout;
