import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from '@/styles/styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const [loaded, error] = useFonts({
    'Ubuntu-Bold': require('@/assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Light': require('@/assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-Medium': require('@/assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-Regular': require('@/assets/fonts/Ubuntu-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
