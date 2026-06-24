import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Alert, Platform, Button } from 'react-native';

export default function TextInputAlertScreen() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [numero, setNumero] = useState('');
  const [telefono, setTelefono] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [comentario, setComentario] = useState('');
  const [decimal, setDecimal] = useState('');

  const campos = [
    { label: 'Nombre', value: nombre },
    { label: 'Email', value: email },
    { label: 'Contraseña', value: pass ? 'Ingresada' : 'No ingresada' },
    { label: 'Edad', value: numero },
  ];

  const mostrarAlerta = (titulo, mensaje, botones) => {
    if (Platform.OS == 'web'){
      alert('${titulo}\n\n{mensaje}');
      retur;
    }
    Alert.alert(titulo, mensaje, botones);
  }

  //Alert 1
  const confirmarEnvio = () =>{
    mostrarAlerta(
      'Confirmar envio',
      'Si estas seguro de confirmar el envio?',
      [
        {
          text: "Cancelar",
          onPress: () =>mostratAlerta('Cancelado', 'No se envio nada'),
          style: 'cancel',
        },

        {
        text: 'Confirmar',
        onPress: () => mostrarAlerta('Enviado', 'Se ha enviado tu fromulario')
        },
      ]
    );
  };

  //Alert 2 
  const validarNombre = () => {
    if (nombre === '') {
      mostrarAlerta('Campo vacio', 'Porfavor escribe tu nombre');
    }else{
      mostrarAlerta('Nombre guardado', 'Hola $(nombre) tu nombre fue guardado');
    }
  };

  //Alert 3
  const validarEmail = () => {
    if (email === ''){
      mostrarAlerta('Error', 'Ingresa un email');
    }else if (!email.includes('@')){
      mostrarAlerta('Error', 'Ingresa un Email valido');
    }else{
      mostrarAlerta('Su email es valido', 'Felicidades')
    }
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Ejemplos de input</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Escribe aqui tu nombre..."
        autoCapitalize="words"
        style={styles.imput}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="fabiola@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.imput}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        value={pass}
        onChangeText={setPass}
        placeholder="*********"
        secureTextEntry={true}
        maxLength={8}
        keyboardType="numeric"
        style={styles.imput}
      />

      <Text style={styles.label}>Edad</Text>
      <TextInput
        value={numero}
        onChangeText={setNumero}
        placeholder="20"
        keyboardType="numeric"
        style={styles.imput}
      />

      <Text style={styles.label}>Telefono</Text>
      <TextInput
        value={telefono}
        onChangeText={setTelefono}
        placeholder="Aqui va tu telefono"
        keyboardType="phone-pad"
        style={styles.imput}
      />

      <Text style={styles.label}>Busqueda</Text>
      <TextInput
        value={busqueda}
        onChangeText={setBusqueda}
        placeholder="Buscar.."
        returnKeyType="search"
        autoCapitalize="default"
        style={styles.imput}
      />

      <Text style={styles.label}>Precio</Text>
      <TextInput
        value={decimal}
        onChangeText={setDecimal}
        placeholder="15.5"
        keyboardType="decimal-pad"
        style={styles.imput}
      />

      <Text style={styles.label}>Comentario</Text>
      <TextInput
        value={comentario}
        onChangeText={setComentario}
        placeholder="Escribe tu comentario"
        multiline={true}
        numberOfLines={4}
        keyboardType="default"
        style={styles.imput}
      />

      <View style = {styles.botonesContainer}>
        <View style = {styles.botonWrapper}>
          <Button title = 'Guardar nombre' onPress = {validarNombre}></Button>
        </View>
        <View style = {styles.botonWrapper}>
          <Button title = 'Validar email' onPress = {validarEmail}></Button>
        </View>
      </View>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30,
  },

  label: {
    fontSize: 13,
    color: '#666',
    marginTop: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },

  imput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
  },

  botonesContainer: {
    marginTop: 20,
    gap: 8,
  },

  botonWrapper: {
    marginBottom: 4
  }
});