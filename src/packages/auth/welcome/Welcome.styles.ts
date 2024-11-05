import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#FFFFFF',
      justifyContent: 'space-between'
    },
    buttonContainer: {
      width: '100%',
      maxWidth: 200,
      marginVertical: 16,
      marginBottom: 320,
      flexGrow: 1,
      justifyContent: 'flex-end'
    },
    button: {
      backgroundColor: '#FFF',
      borderWidth: 0.5,
      borderColor: '#000',
      borderRadius: 5,
      paddingVertical: 12,
      marginVertical: 8,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 10,
      color: '#000',
      fontWeight: '700',
    },
});