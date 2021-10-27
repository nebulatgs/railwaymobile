import {NavigationContainer} from '@react-navigation/native';
import {Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import {RecoilRoot} from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <NativeBaseProvider>
          <Box>Hello world</Box>
        </NativeBaseProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
}
