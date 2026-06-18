/* Zona 1: Importaciones, componentes y archivos */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableSwitchScreen from './PressableSwitchScreen';
import TextInputAlertScreen from './TextInputAlertScreen';
import FlatListSectionListScreen from './FlatListSectionListScreen';
import ImageBackgroundSplashScreen from './ImageBackgroundSplashScreen';
import ActivityKeyboardScreen from './ActivityKeyboardScreen';
import ModalBottomSheetScreen from './ModalBottomSheetScreen';

/* Zona 2: Main - Renderizado de componentes */

export default function MenuScreen() {

  const [screen, setScreen] = useState('menu');

  switch (screen) {

    case 'tarjetas':
      return <TarjetasScreen />;

    case 'safeArea':
      return <SafeAreaScreen />;

    case 'pressableSwitch':
      return <PressableSwitchScreen />;

    case 'textInputAlert':
      return <TextInputAlertScreen />;

    case 'flatListSectionList':
      return <FlatListSectionListScreen />;

    case 'imageBackgroundSplash':
      return <ImageBackgroundSplashScreen />;

    case 'activityKeyboard':
      return <ActivityKeyboardScreen />;

    case 'modalBottomSheet':
      return <ModalBottomSheetScreen />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>

          <View style={styles.boton}>
            <Button
              title="Práctica Tarjetas"
              onPress={() => setScreen('tarjetas')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Práctica SafeAreaView & ScrollView"
              onPress={() => setScreen('safeArea')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica Pressable & Switch"
              onPress={() => setScreen('pressableSwitch')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica TextInput & Alert"
              onPress={() => setScreen('textInputAlert')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica FlatList & SectionList"
              onPress={() => setScreen('flatListSectionList')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica ImageBackground & SplashScreen"
              onPress={() => setScreen('imageBackgroundSplash')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica ActivityIndicator & KeyboardAvoidingView"
              onPress={() => setScreen('activityKeyboard')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica Modal & BottomSheet"
              onPress={() => setScreen('modalBottomSheet')}
            />
          </View>

          <StatusBar style="auto" />

        </View>
      );
  }
}

/* Zona 3: Estilos y posicionamiento */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boton: {
    marginVertical: 5,
    width: '80%',
  },
});