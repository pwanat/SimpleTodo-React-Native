import { Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'

type Props = {
    onPress: () => void,
    icon: ReactNode;
    text: string;
}

const AuthProviderButton = ({ onPress, icon, text }: Props) => {
  return (
    <TouchableOpacity
    className="flex flex-row justify-center items-center gap-2 p-3 rounded-md border border-slate-300"
    onPress={onPress}
  >
    {icon && icon}
    <Text>{text}</Text>
  </TouchableOpacity>
  )
}

export default AuthProviderButton