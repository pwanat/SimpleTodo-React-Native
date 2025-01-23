import React from "react";
import { Fab, FabIcon } from "./ui/fab";
import { AddIcon } from "./ui/icon";
import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";

const NewTaskFab = () => {
  const router = useRouter();

  const onPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push("/task/new");
  };

  return (
    <Fab
      size="lg"
      placement="bottom right"
      className="m-5 bg-indigo-500"
      onPress={onPress}
    >
      <FabIcon as={AddIcon} size="md" />
    </Fab>
  );
};

export default NewTaskFab;
