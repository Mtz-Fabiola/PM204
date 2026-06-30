// =======================
// **IMPORTACIONES**
// =======================

// **React y useState: permite manejar estados en el componente**
import React, { useState } from 'react';

// **StatusBar: controla la barra superior del celular**
import { StatusBar } from 'expo-status-bar';

// **Importación de componentes de React Native**
import {
  StyleSheet, // **StyleSheet: estilos del componente**
  Text, // **Text: muestra texto en pantalla**
  TextInput, // **TextInput: campo para escribir datos**
  View, // **View: contenedor principal**
  TouchableOpacity, // **TouchableOpacity: botón presionable**

  // =======================
  // **ACTIVITYINDICATOR**
  // =======================
  // **Muestra un spinner (carga) cuando la app está procesando algo**
  ActivityIndicator,

  // =======================
  // **KEYBOARDAVOIDINGVIEW**
  // =======================
  // **Evita que el teclado tape los inputs en pantalla**
  KeyboardAvoidingView,

  // **Platform: detecta si es Android o iOS**
  Platform
} from 'react-native';


// =======================
// **COMPONENTE PRINCIPAL**
// =======================
export default function ActivityIndicator_KeyboardAvoidingView() {

  // =======================
  // **ESTADOS**
  // =======================

  const [n, setN] = useState(''); // **TextInput: nombre**
  const [c, setC] = useState(''); // **TextInput: correo**
  const [p, setP] = useState(''); // **TextInput: contraseña**

  const [l, setL] = useState(false); // **ActivityIndicator: loading login**
  const [ok, setOk] = useState(false); // **View: pantalla de bienvenida**
  const [e, setE] = useState(''); // **Text: errores del formulario**
  const [out, setOut] = useState(false); // **ActivityIndicator: loading logout**


  // =======================
  // **FUNCIÓN LOGIN**
  // =======================
  const login = () => {

    // **Validación: campos vacíos (TextInput)**
    if (!n || !c || !p) return setE('Completa campos');

    // **Validación: correo debe incluir @**
    if (!c.includes('@')) return setE('Correo inválido');

    // **Limpia el error (Text)**
    setE('');

    // **ACTIVITYINDICATOR: activa loading**
    setL(true);

    // **Simulación de carga (como servidor)**
    setTimeout(() => {

      // **ACTIVITYINDICATOR: desactiva loading**
      setL(false);

      // **View: cambia a pantalla de bienvenida**
      setOk(true);

    }, 1200);
  };


  // =======================
  // **FUNCIÓN LOGOUT**
  // =======================
  const logout = () => {

    // **ACTIVITYINDICATOR: inicia loading de salida**
    setOut(true);

    setTimeout(() => {

      // **View: regresa a pantalla login**
      setOk(false);

      // **TextInput: limpia nombre**
      setN('');

      // **TextInput: limpia correo**
      setC('');

      // **TextInput: limpia contraseña**
      setP('');

      // **Text: limpia errores**
      setE('');

      // **ACTIVITYINDICATOR: apaga loading**
      setOut(false);

    }, 1000);
  };


  // =======================
  // **PANTALLA BIENVENIDA (View)**
  // =======================
  if (ok)
    return (
      <View style={styles.ok}>

        {/* **Text: muestra nombre del usuario** */}
        <Text style={styles.t}>
          Bienvenid@ {n}
        </Text>

        {/* =======================
            **ACTIVITYINDICATOR**
            ======================= */}
        {out ? (
          <>
            {/* **ActivityIndicator: loading de salida** */}
            <ActivityIndicator color="#002fa7" />

            {/* **Text: mensaje de carga** */}
            <Text style={styles.azul}>Cerrando...</Text>
          </>
        ) : (
          // **TouchableOpacity: botón cerrar sesión**
          <TouchableOpacity style={styles.btn} onPress={logout}>
            <Text style={styles.btnt}>Cerrar sesión</Text>
          </TouchableOpacity>
        )}

        {/* **StatusBar: barra superior del sistema** */}
        <StatusBar style="dark" />
      </View>
    );


  // =======================
  // **PANTALLA LOGIN (KeyboardAvoidingView)**
  // =======================
  return (
    <KeyboardAvoidingView

      style={styles.c} // **View principal con KeyboardAvoidingView**

      // =======================
      // **KEYBOARDAVOIDINGVIEW EXPLICACIÓN**
      // =======================
      // iOS: usa padding para subir inputs
      // Android: usa height para ajustar pantalla
      // evita que el teclado tape los TextInput
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      {/* **Text: título Login** */}
      <Text style={styles.t}>Login</Text>

      {/* **TextInput: nombre** */}
      <TextInput
        style={styles.i}
        placeholder="Nombre"
        placeholderTextColor="#666"
        value={n}
        onChangeText={setN}
      />

      {/* **TextInput: correo** */}
      <TextInput
        style={styles.i}
        placeholder="Correo"
        placeholderTextColor="#666"
        value={c}
        onChangeText={setC}
      />

      {/* **TextInput: contraseña** */}
      <TextInput
        style={styles.i}
        placeholder="Contraseña"
        placeholderTextColor="#666"
        value={p}
        onChangeText={setP}
        secureTextEntry
      />

      {/* **Text: error si existe** */}
      {!!e && <Text style={styles.azul}>{e}</Text>}

      {/* =======================
          **ACTIVITYINDICATOR**
          ======================= */}
      {l ? (
        // **ActivityIndicator: loading login**
        <ActivityIndicator size="large" color="#002fa7" />
      ) : (
        // **TouchableOpacity: botón login**
        <TouchableOpacity style={styles.btn} onPress={login}>
          <Text style={styles.btnt}>Ingresar</Text>
        </TouchableOpacity>
      )}

      {/* **StatusBar: barra del sistema**
      */}
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
}


// =======================
// **ESTILOS**
// =======================
const styles = StyleSheet.create({

  // **KeyboardAvoidingView: contenedor login**
  c: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },

  // **View: pantalla bienvenida**
  ok: { flex: 1, backgroundColor: '#FFE862', justifyContent: 'center', alignItems: 'center' },

  // **Text: títulos**
  t: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#002fa7',
    marginBottom: 20
  },

  // **TextInput: campos**
  i: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#002fa7',
    marginVertical: 6,
    padding: 12,
    fontSize: 18,
    color: '#002fa7'
  },

  // **TouchableOpacity: botón**
  btn: {
    backgroundColor: '#002fa7',
    padding: 14,
    marginTop: 15,
    borderRadius: 8
  },

  // **Text: texto botón**
  btnt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },

  // **Text: mensajes de error**
  azul: {
    color: '#002fa7',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18
  }
});