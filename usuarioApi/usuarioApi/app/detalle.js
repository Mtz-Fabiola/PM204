import { View, Text, StyleSheet, Pressable, Alert, Platform } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function Detalle() {

  const { id, nombre, edad } = useLocalSearchParams();


  const eliminarUsuario = async () => {

    try {

      const respuesta = await fetch(
        `http://192.168.1.98:5000/v1/usuarios/${id}`,
        {
          method: "DELETE",
        }
      );

      const datos = await respuesta.json();

      console.log(datos);


      if (respuesta.ok) {

        if (Platform.OS === "web") {
          window.alert("Usuario eliminado correctamente");
        } else {
          Alert.alert("Éxito", "Usuario eliminado correctamente");
        }

        router.back();

      } else {

        if (Platform.OS === "web") {
          window.alert("No se pudo eliminar el usuario");
        } else {
          Alert.alert("Error", "No se pudo eliminar el usuario");
        }

      }


    } catch (error) {

      console.log(error);

      if (Platform.OS === "web") {
        window.alert("No fue posible eliminar");
      } else {
        Alert.alert("Error", "No fue posible eliminar");
      }

    }

  };


  return (
    <View style={styles.container}>

      <Text style={styles.encabezado}>
        Detalle del Usuario
      </Text>


      <View style={styles.card}>


        <Text style={styles.label}>
          Nombre
        </Text>

        <Text style={styles.valor}>
          {nombre}
        </Text>


        <View style={styles.linea}></View>


        <Text style={styles.label}>
          Edad
        </Text>

        <Text style={styles.valor}>
          {edad} años
        </Text>



        <Pressable
          style={styles.botonActualizar}
          onPress={() =>
            router.push({
              pathname: "/editar",
              params: {
                id,
                nombre,
                edad,
              },
            })
          }
        >

          <Text style={styles.textoBoton}>
            Actualizar
          </Text>

        </Pressable>



        <Pressable
          style={styles.botonEliminar}
          onPress={eliminarUsuario}
        >

          <Text style={styles.textoBoton}>
            Eliminar
          </Text>

        </Pressable>


      </View>


    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },


  encabezado: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 25,
    color: "#1F2937",
  },


  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 25,
    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },


  label: {
    color: "gray",
    fontSize: 15,
    marginTop: 10,
  },


  valor: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1F2937",
  },


  linea: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 10,
  },


  botonActualizar: {
    backgroundColor: "#FFC107",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25,
  },


  botonEliminar: {
    backgroundColor: "#DC3545",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },


  textoBoton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});