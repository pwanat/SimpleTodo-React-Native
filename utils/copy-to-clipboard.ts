import * as Clipboard from "expo-clipboard";
import { toast } from "sonner-native";

export const copyToClipboard = async (path: string) => {
  if (!path) return;

  await Clipboard.setStringAsync(path);
  toast.success("Copied to clipboard");
};
