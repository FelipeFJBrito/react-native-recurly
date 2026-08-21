import {SplashScreen, Stack} from "expo-router";
import  '@/global.css';
import {useFonts} from "expo-font";
import {useEffect} from "react";


export default function RootLayout() {
  /*
    we are using the fonts hook from expoFonts
    we pass through an object where the keys are the names (sans-regular)
    and the values are the actuale the files  require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    it returns a boolean variable that tells if the fonst are finished loading or not
  */
  const [fontsLoaded] = useFonts({
    'sans-regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'sans-bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'sans-medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    'sans-light': require('../assets/fonts/PlusJakartaSans-Light.ttf'),
    'sans-semibold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-extrabold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
  })
 /*
 The useEffect watches for this boolean, and if the fonts are loaded it calls this
 SplashScreen.hideAsync, which dismiss the splashcreen to review the app
 */
  /*
  And next step we need to sync with tailwindcss at global.css
  */
  useEffect(() => {
    if(fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if(!fontsLoaded) return null;

  return <Stack screenOptions={{headerShown: false}} />;
}
