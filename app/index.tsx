import React from "react";
import { ButtonSpinner, ButtonIcon } from "@/components/ui/button";

import { Text, View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { EditIcon } from "@/components/ui/icon";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button
        action={"primary"}
        variant={"solid"}
        size={"lg"}
        isDisabled={false}
      >
        <ButtonIcon as={EditIcon} />
        <ButtonText>Hello World</ButtonText>
      </Button>
    </View>
  );
}
