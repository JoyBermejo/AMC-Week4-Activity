import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, StatusBar, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container} edges={['center']}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Text style={styles.boldText}>Joy</Text> Bermejo
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
  },
  scrollView: {
    marginHorizontal: 20,
    borderWidth: 5,
    borderColor: 'black',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    margin: 10,
    marginLeft: 95,
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    marginTop: 20,
    height: 10,
    borderColor: '#eaeaea',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 5,
  },
});

export default App;
