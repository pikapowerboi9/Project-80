import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StarMap from "./screens/StarMap";
import DailyPic from "./screens/DailyPic";
import SpaceCrafts from "./screens/SpaceCrafts";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerShown:false
          }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
              <Stack.Screen name="DailyPic" component={DailyPicScreen} />
              <Stack.Screen name="StarMap" component={StarMapScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});