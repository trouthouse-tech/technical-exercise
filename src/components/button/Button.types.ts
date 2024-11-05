import { GestureResponderEvent } from "react-native";

export type ButtonProps = {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    accessibilityLabel?: string;
}