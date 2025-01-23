import { useAuth, useOAuth } from "@clerk/clerk-expo";
import { Text, View, Image, TouchableOpacity } from "react-native";
import WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";
import { Redirect } from "expo-router";

export default function Index() {
  const { isSignedIn } = useAuth();
  const { startOAuthFlow: appleOauth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: googleOAuth } = useOAuth({
    strategy: "oauth_google",
  });

  const handleAppleOAuth = async () => {
    try {
      const { createdSessionId, setActive } = await appleOauth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleOAuth = async () => {
    try {
      const { createdSessionId, setActive } = await googleOAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openLink = async () => {
    WebBrowser.openBrowserAsync("https://google.com");
  };

  if (isSignedIn) {
    return <Redirect href="/(authenticated)/(tabs)/search" />;
  }

  return (
    <View className="container p-8 bg-white">
      <Image
        source={require("@/assets/images/icon.png")}
        className="h-40 w-40 self-center"
      />
      <View>
        <Image
          source={require("@/assets/images/login.png")}
          className="max-w-sm h-auto"
        />
        <View className="flex gap-4 p-4">
          {/* TODO: Move buttons to separate component */}
          <TouchableOpacity
            className="flex flex-row justify-center items-center gap-2 p-3 rounded-md border border-slate-300"
            onPress={handleAppleOAuth}
          >
            <Ionicons name="logo-apple" size={24} />
            <Text>Continue with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex flex-row justify-center items-center gap-2 p-3 rounded-md border border-slate-300"
            onPress={handleGoogleOAuth}
          >
            <Ionicons name="logo-google" size={24} />
            <Text>Continue with Google</Text>
          </TouchableOpacity>
          {/* TODO Finish email signup/signin */}
          <TouchableOpacity className="flex flex-row justify-center items-center gap-2 p-3 rounded-md border border-slate-300">
            <Ionicons name="mail" size={24} />
            <Text>Continue with Email</Text>
          </TouchableOpacity>

          <Text className="text-center text-xs text-slate-600">
            By continuing you agree to Todoist's clone{" "}
            <Text className="text-xs underline" onPress={openLink}>
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text className="text-xs underline" onPress={openLink}>
              Privacy Policy
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
