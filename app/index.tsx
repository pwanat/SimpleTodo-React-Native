import { useAuth, useOAuth } from "@clerk/clerk-expo";
import { Text, View, Image, TouchableOpacity } from "react-native";
import WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";
import { Redirect } from "expo-router";
import AuthProviderButton from "@/components/AuthProviderButton";

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
          <AuthProviderButton
            onPress={handleAppleOAuth}
            text="Continue with Apple"
            icon={<Ionicons name="logo-apple" size={24} />}
          />
          <AuthProviderButton
            onPress={handleGoogleOAuth}
            text="Continue with Google"
            icon={<Ionicons name="logo-google" size={24} />}
          />
          <AuthProviderButton
            onPress={handleGoogleOAuth}
            text="Continue with Email"
            icon={<Ionicons name="mail" size={24} />}
          />

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
