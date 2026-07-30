import React, { useState } from "react";
import {View,Text,StyleSheet,TextInput,Pressable,Alert,Platform,} from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function Editar() {

  const { id, nombre, edad } = useLocalSearchParams();

  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevaEdad, setNuevaEdad] = useState(edad);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === "web") {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const actualizarUsuario = async () => {

    try {

      const respuesta = await fetch(`http://192.168.1.174:5000/v1/usuarios/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nuevoNombre,
          edad: Number(nuevaEdad),
        }),
      });

      const datos = await respuesta.json();

      console.log(datos);

      mostrarMensaje("Éxito", "Usuario actualizado");

      router.back();

    } catch (error) {

      console.log(error);

      mostrarMensaje("Error", "No fue posible actualizar.");

    }

  };

  return (

    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Editar Usuario
        </Text>

        <TextInput
          style={styles.input}
          value={nuevoNombre}
          onChangeText={setNuevoNombre}
        />

        <TextInput
          style={styles.input}
          value={String(nuevaEdad)}
          keyboardType="numeric"
          onChangeText={setNuevaEdad}
        />

        <Pressable
          style={styles.boton}
          onPress={actualizarUsuario}
        >
          <Text style={styles.textoBoton}>
            Guardar Cambios
          </Text>
        </Pressable>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },

  boton: {
    backgroundColor: "#FFC107",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBoton: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
  },

});