
import { StateProvider, useStateValue } from '_utils/StateProvider';
import reducer, { initialState } from '_utils/reducer';
import Main from './src';
import useFonts from '_utils/hooks/useFonts';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
//ref https://rnfirebase.io/messaging/usage
// import App from './src';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };


  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  );
}

