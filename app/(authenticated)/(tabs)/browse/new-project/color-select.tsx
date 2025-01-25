import { useRouter } from "expo-router";
import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Ionicons } from "@expo/vector-icons";
import { DEFAULT_PROJECT_COLOR, PROJECT_COLORS } from "@/constants/colors";

const Page = () => {
  const [selected, setSelected] = useState<string>(DEFAULT_PROJECT_COLOR);
  const router = useRouter();
  const headerHeight = useHeaderHeight();

  const onColorSelect = (color: string) => {
    setSelected(color);

    // Looks like this is quite slow, we should probably use a different method like zustand/context
    router.setParams({ bg: color });
  };

  return (
    <View style={{ marginTop: headerHeight }}>
      <View className="flex flex-row justify-center flex-wrap gap-3 p-4">
        {PROJECT_COLORS.map((color) => (
          <TouchableOpacity
            key={color}
            className="h-16 w-16 rounded-full justify-center items-center"
            style={{
              backgroundColor: color,
            }}
            onPress={() => onColorSelect(color)}
          >
            {selected === color && (
              <Ionicons name="checkmark" size={24} color={"#fff"} style={{}} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default Page;
