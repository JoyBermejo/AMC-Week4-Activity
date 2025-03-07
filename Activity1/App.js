import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Joy
        </Text>
         <Text style={styles.text}>
          Joy
        </Text>
         <Text style={styles.text}>
          Joy
        </Text>
         <Text style={styles.text}>
          Joy
        </Text>
         <Text style={styles.text}>
          Joy
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});

export default App;