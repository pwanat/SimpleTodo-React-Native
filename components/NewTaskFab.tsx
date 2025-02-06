import React from "react";
import { Fab, FabIcon } from "./ui/fab";
import { AddIcon } from "./ui/icon";
import * as Haptics from "expo-haptics";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type Props = {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
};

const NewTaskFab = ({ bottomSheetModalRef }: Props) => {
  const onPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    bottomSheetModalRef.current?.present();
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
