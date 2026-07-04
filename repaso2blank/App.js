/* Zona 1: Importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import SplashScreen from './screens/SplashScreen';
import HomScreen from './screens/HomScreen';

/* Zona 2: Main */

export default function App() {

  const [mostrarSplash, setMostrarSplash] = useState(true);

  if (mostrarSplash) {
    setTimeout(() => {
      setMostrarSplash(false);
    }, 2000);

    return (
      <View style={styles.container}>
        <SplashScreen />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HomScreen />
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3: Estilos */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});