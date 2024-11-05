import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: 120,
        height: 20,
        maxWidth: 300,
        marginBottom: 16,
    },
    label: {
        fontSize: 10,
        color: '#000',
        marginBottom: 4,
        fontWeight: '400',
      },
      input: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        fontSize: 10,
        backgroundColor: '#FFF',
        width: '100%',
    },
    inputError: {
    borderColor: '#FF5A5F',
    },
    errorText: {
        color: '#FF5A5F',
        fontSize: 12,
        marginTop: 4,
      },   
      passwordGap: {
        marginTop: 16,
      }, 
});