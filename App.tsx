import {NavigationContainer} from '@react-navigation/native';
import {Box, NativeBaseProvider, Text} from 'native-base';
import React from 'react';
import {RecoilRoot} from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <NativeBaseProvider>
          <Box _light={{bgColor: 'white'}} _dark={{bgColor: 'black'}} flex={1}>
            <Text _light={{color: 'black'}} _dark={{color: 'white'}}>
              Hello world!
            </Text>
          </Box>
        </NativeBaseProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
}
