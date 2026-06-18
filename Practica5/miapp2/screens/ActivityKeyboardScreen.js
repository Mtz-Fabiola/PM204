/* Zona 1: Importaciones, componentes y archivos */

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, TextInput, KeyboardAvoidingView, Platform} from 'react-native';


/* Zona 2: Main - Renderizado de componentes */
export default function KeyboardScreen() {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre}/>

      <TextInput style={styles.input} placeholder="Apellido" value={apellido} onChangeText={setApellido}/>

      <TextInput style={styles.input} placeholder="Correo" keyboardType="email-address" value={correo} onChangeText={setCorreo}/>

      <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" value={telefono} onChangeText={setTelefono}/>

      <TextInput style={styles.input} placeholder="Ciudad" value={ciudad} onChangeText={setCiudad}/>

      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} value={contrasena} onChangeText={setContrasena}/>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}


/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },

  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});