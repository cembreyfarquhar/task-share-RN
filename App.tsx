import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AuthProvider } from 'react-use-auth'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Is it really fucking working?????</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
