import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({


    //splashscreen
    containersplash: {
        flex: 1,
        backgroundColor: 'hsla(129, 94%, 48%, 0.85)',
        paddingTop: 200,
        paddingHorizontal: 50,
        gap: 300
    },
    image1splash: {
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image2splash: {
        tintColor: "rgba(239, 231, 231, 1)",
        width: 300,
        height: 75,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },


    //Intropage
    containerintro: {
        flex: 1,
        backgroundColor: '#141f23',
        paddingTop: 200,
        paddingHorizontal: 20,
        alignItems: 'center',
        gap: 30
    },
    imageintro: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textintro: {
        fontSize: 25,
        color: "#f0f0f0",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textboxintern: {
        marginTop: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f0f0f037',
        backgroundColor: '#202f36',
        width: 350,
        padding: 20,
        alignItems: 'center',
        textAlign: 'center',
        color: "#f0f0f0",
        fontWeight: 'bold',
    },
    textbox: {
        marginTop: -30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f0f0f037',
        width: 350,
        padding: 20,
        alignItems: 'center',
        textAlign: 'center',
        color: "#f0f0f0",
        fontWeight: 'bold',
    },
    BlueButton: {
        marginTop: 70,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: '#20afccff',
        width: 350,
        padding: 20,
        alignItems: 'center',
        textAlign: 'center',
        color: '#141f23',
        fontWeight: 'bold',
    },

    //Writepage
    containerwrite: {
        flex: 1,
        backgroundColor: '#141f23',
        paddingTop: 80,
        paddingHorizontal: 20,
        alignItems: 'center',
        gap: 30
    },
    completeBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgbar1: {
        width: 250,
        height: 20
    },
    imgbar2: {
        width: 30,
        height: 25
    },
    textbar: {
        color: "#da1eb2ff",
    },
    textlicao: {
        fontSize: 25,
        color: "#f0f0f0",
        fontWeight: 'bold',
    },
    alinharimg: {
        flexDirection: "row",
    },
    imagewrite: {
        width: 175,
        height: 175,
    },
    writebox: {
        marginTop: 70,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f0f0f037',
        width: 150,
        height: 50,
        alignItems: 'center',
        textAlign: 'center',
        color: "#f0f0f0",
        fontWeight: 'bold',
    },
    writeboxintern: {
        marginTop: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f0f0f037',
        backgroundColor: '#202f36',
        width: 350,
        height: 150,
        padding: 20,
        flexDirection: 'row'

    },
    textwritebox: {
        color: "#f0f0f0",
        fontWeight: 'bold',
    },

    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        minWidth: 80,
        height: 40,
        paddingHorizontal: 2,
        fontSize: 18,
    },
    GreyButton: {
        marginTop: 150,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: '#202f36',
        width: 350,
        padding: 20,
        alignItems: 'center',
        textAlign: 'center',
        color: '#141f23',
        fontWeight: 'bold',
    },
});