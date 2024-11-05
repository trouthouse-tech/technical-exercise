import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
      fontSize: 24,
      fontWeight: '400',
      color: '#000',
      marginBottom: 8,
      marginTop: 16,
      fontFamily: 'Inter',
    },
    highlight: {
        color: '#FF645C',
        fontWeight: '700',
        fontFamily: 'Inter',
        fontStyle: 'italic',
    },
    subtitle: {
        fontSize: 12,
        color: '#000',
        fontWeight: '700',
        marginBottom: 32,
        marginTop: 8,
    },
});