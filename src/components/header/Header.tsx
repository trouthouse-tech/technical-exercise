import React, { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./Header.styles";
import { HeaderProps } from "./Header.types";

const DEFAULT_TITLE = (
    <Text style={styles.title}>
        Welcome to the <Text style={styles.highlight}>Pencil Bible</Text>
    </Text>
);  

export const Header: FC<HeaderProps> = ({ title = DEFAULT_TITLE, screenName }) => {
    return (
        <View style={styles.titleContainer}>
            {title}
            <Text style={styles.subtitle}>{screenName}</Text>
        </View>
    );
};