import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './src/navigation/MainStack';



const App = ({
  params,
}) => {
  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  );
}

export default App;


