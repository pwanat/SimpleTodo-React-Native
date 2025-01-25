import { View, TouchableOpacity } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { PROJECT_COLORS } from "@/constants/colors";
import useNewProjectStore from "@/stores/new-project-store";
import { CheckIcon, Icon } from "@/components/ui/icon";
import colors from "tailwindcss/colors";

const Page = () => {
  const selectedColor = useNewProjectStore((state) => state.selectedColor);
  const setSelectedColor = useNewProjectStore((state) => state.setSelectedColor);

  const headerHeight = useHeaderHeight();

  const onColorSelect = (color: string) => {
    setSelectedColor(color);
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
            {selectedColor === color && (
              <Icon as={CheckIcon} color={colors.white} />              
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default Page;
