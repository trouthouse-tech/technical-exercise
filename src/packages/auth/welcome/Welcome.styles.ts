import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#FFFFFF',
      justifyContent: 'space-between'
    },
    titleContainer: {
        justifyContent: 'flex-start'
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
    footer: {
      position: 'absolute',
      bottom: 16,
      fontSize: 8,
      color: '#000',
      fontWeight: '700',
      fontFamily: 'Inter',
      marginBottom: 16,
    },
});