import { DarkTheme, DefaultTheme, ThemeProvider, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabLayout from './(tabs)/_layout';
import NotFoundScreen from './+not-found';
import Details from './details';
import WelcomeScreen from './welcome';
import DetailedProduct from './detailedProduct';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" options={{ presentation: 'modal' }} component={WelcomeScreen} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} component={TabLayout} />
      <Stack.Screen name="+not-found" component={NotFoundScreen} />
      <Stack.Screen name="Details" options={{ presentation: 'modal' }} component={Details} />
      <Stack.Screen name="DetailsProduct" options={{ presentation: 'modal' }} component={DetailedProduct} />
    </Stack.Navigator>

  )
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Sora: require('../assets/fonts/Sora-Regular.ttf'),
  });

  return (
    <NavigationContainer independent={true}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StackNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}
