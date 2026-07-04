/* Zona 1 */

import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  SafeAreaView
} from 'react-native';

/* Zona 2 */

export default function HomScreen() {

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");

  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(false);

  const agregarLibro = () => {

    if (titulo === "" || autor === "" || genero === "") {
      Alert.alert("Error", "Llena todos los campos");
      return;
    }

    setCargando(true);

    setTimeout(() => {

      const nuevoLibro = {
        id: Math.random().toString(),
        titulo,
        autor,
        genero
      };

      setLista([...lista, nuevoLibro]);

      setTitulo("");
      setAutor("");
      setGenero("");

      setCargando(false);

      Alert.alert("Correcto", "Libro agregado");

    }, 1500);

  };

  return (

    <ImageBackground
      source={require("../assets/fondo.png")}
      style={styles.fondo}
    >

      <SafeAreaView style={styles.container}>

        <Text style={styles.titulo}>
          Registro de Libros Leídos
        </Text>

        <View style={styles.form}>

          <TextInput
            placeholder="Título"
            style={styles.input}
            value={titulo}
            onChangeText={setTitulo}
          />

          <TextInput
            placeholder="Autor"
            style={styles.input}
            value={autor}
            onChangeText={setAutor}
          />

          <TextInput
            placeholder="Género"
            style={styles.input}
            value={genero}
            onChangeText={setGenero}
          />

          <Pressable
            style={styles.boton}
            onPress={agregarLibro}
          >
            <Text style={styles.textoBoton}>
              Agregar Libro
            </Text>
          </Pressable>

          {cargando && (
            <ActivityIndicator size="large" color="red" />
          )}

        </View>

        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.libro}>
              <Text>Título: {item.titulo}</Text>
              <Text>Autor: {item.autor}</Text>
              <Text>Género: {item.genero}</Text>
            </View>
          )}
        />

      </SafeAreaView>

    </ImageBackground>

  );

}

/* Zona 3 */

const styles = StyleSheet.create({

  fondo: {
    flex: 1
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.6)",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },

  form: {
    marginBottom: 20
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8
  },

  boton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  textoBoton: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },

  libro: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  }

});