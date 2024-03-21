import React from 'react';
import{ Home }from './src/screens/Home';
import {useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components';
import theme from './src/theme'
import { Loading } from './src/components/Loading';
import { RegisterScreen } from './src/screens/RegisterScreen';


export default function App() {
  const [ fontsLoaded ]= useFonts ({Roboto_700Bold, Roboto_500Medium, Roboto_400Regular})

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ?  <RegisterScreen/> : <Loading/>}
    </ThemeProvider>
  );
}


