import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConsultaUsuariosScreen from './screens/ConsultaUsuariosScreen';
import AltaUsuariosScreen from './screens/AltaUsuariosScreen';
import DetalleUsuarioScreen from './screens/DetalleUsuarioScreen';
import EditarUsuarioScreen from './screens/EditarUsuarioScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Consulta">

        <Stack.Screen
          name="Consulta"
          component={ConsultaUsuariosScreen}
          options={{ title: "Lista de Usuarios" }}
        />

        <Stack.Screen
          name="Alta"
          component={AltaUsuariosScreen}
          options={{ title: "Registrar Usuario" }}
        />

        <Stack.Screen
          name="Detalle"
          component={DetalleUsuarioScreen}
          options={{ title: "Detalle del Usuario" }}
        />

        <Stack.Screen
          name="Editar"
          component={EditarUsuarioScreen}
          options={{ title: "Editar Usuario" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}