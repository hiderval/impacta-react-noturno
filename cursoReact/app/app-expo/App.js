import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Palmeiras não tem mundial!!!</Text>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66ccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
