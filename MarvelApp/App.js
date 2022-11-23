import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <ScrollView>
      <Text>Iron Man</Text>
      <Image source={require('./assets/IronMan.png')}/>
      <Text>Thor</Text>
      <Image source={require('./assets/Thor.png')}/>
      <Text style={{fontWeight:'bold', fontSize: 40, alignContent: 'center', justifyContent: 'center', color:'red'}}>Quico</Text>
      <Image source={require('./assets/Captain.png')}/>
      <Text>Hulk</Text>
      <Image source={require('./assets/Hulk.png')}/>
      <Text>Black Widow</Text>
      <Image source={require('./assets/BlackWidow.png')}/>
      <Text>Hawkeye</Text>
      <Image source={require('./assets/Hawkeye.png')}/>
    </ScrollView>
  );
}