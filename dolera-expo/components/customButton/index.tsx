import { ReactNode } from "react";
import { View } from "react-native";
import ButtonCoral from "./buttonCoral";
import ButtonWhite from "./buttonWhite";
import ButtonDarkCoral from "./buttonDarkCoral";

interface CustomButtonProps {
  children: ReactNode;
}

export default function CustomButton({ children }: CustomButtonProps) {
  return <View className="w-full">{children}</View>;
}

CustomButton.coral = ButtonCoral;
CustomButton.white = ButtonWhite;
CustomButton.darkCoral = ButtonDarkCoral;
