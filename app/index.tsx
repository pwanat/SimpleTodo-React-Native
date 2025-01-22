import { useAuth, useOAuth } from "@clerk/clerk-expo";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";
// import { Colors } from "@/constants/Colors";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function Index() {
  const { isSignedIn } = useAuth();
  const { startOAuthFlow: appleOauth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: googleOAuth } = useOAuth({
    strategy: "oauth_google",
  });

  const { top } = useSafeAreaInsets();
  const { user } = useUser();

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
          style={styles.bannerImage}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAppleOAuth}>
            <Ionicons name="logo-apple" size={24} />
            <Text style={styles.buttonText}>Continue with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleGoogleOAuth}>
            <Ionicons name="logo-google" size={24} />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail" size={24} />
            <Text style={styles.buttonText}>Continue with Email</Text>
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

const styles = StyleSheet.create({
  bannerImage: {
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  buttonContainer: {
    gap: 16,
    marginHorizontal: 40,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 12,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    // borderColor: Colors.lightBorder,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
