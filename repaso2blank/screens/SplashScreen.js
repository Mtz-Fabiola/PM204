/* Zona 1 */

import { View, Text, StyleSheet } from "react-native";

/* Zona 2 */

export default function SplashScreen() {

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Registro de Libros
            </Text>

            <Text style={styles.subtitulo}>
                Bienvenido
            </Text>

        </View>

    );

}

/* Zona 3 */

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#4A90E2",
        justifyContent: "center",
        alignItems: "center"
    },

    titulo: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    },

    subtitulo: {
        fontSize: 18,
        color: "white",
        marginTop: 10
    }

});