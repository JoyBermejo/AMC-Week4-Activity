import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  { id: '1', title: 'Buy groceries' },
  { id: '2', title: 'Clean the house' },
  { id: '3', title: 'Finish React Native project' },
];

const LOAD = [
  { id: '1', title: 'Work hard' },
  { id: '2', title: 'Watch movie' },
  { id: '3', title: 'Finish activity' },
];

const JOY = [
  { id: '1', title: 'Work hard' },
  { id: '2', title: 'Watch movie' },
  { id: '3', title: 'Finish activity' },
];

const MEE = [
  { id: '1', title: 'Work hard' },
  { id: '2', title: 'Watch movie' },
  { id: '3', title: 'Finish activity' },
];

const BEE = [
  { id: '1', title: 'Work hard' },
  { id: '2', title: 'Watch movie' },
  { id: '3', title: 'Finish activity' },
];

const WOO = [
  { id: '1', title: 'Work hard' },
  { id: '2', title: 'Watch movie' },
  { id: '3', title: 'Finish activity' },
];

const DEE = [
  { id: '1', title: 'Work hard' },
  { id: '2', title: 'Watch movie' },
  { id: '3', title: 'Finish activity' },
];

const REE = [
  { id: '1', title: 'Work hard' },
  { id: '2', title: 'Watch movie' },
  { id: '3', title: 'Finish activity' },
  { id: '3', title: 'Finish activity' },
];

type ItemProps = { title: string, color: string };

const Item = ({ title, color }: ItemProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: pressed ? 'darkblue' : color }]}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text>Morning</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} color="#f9c2ff" />}
        keyExtractor={item => item.id}
      />
      <Text>Afternoon</Text>
      <FlatList
        data={LOAD}
        renderItem={({ item }) => <Item title={item.title} color="#ffcccb" />}
        keyExtractor={item => item.id}
      />
      <Text>Evening</Text>
      <FlatList
        data={JOY}
        renderItem={({ item }) => <Item title={item.title} color="#ffeb3b" />}
        keyExtractor={item => item.id}
      />
      <Text>Morning</Text>
      <FlatList
        data={MEE}
        renderItem={({ item }) => <Item title={item.title} color="#4caf50" />}
        keyExtractor={item => item.id}
      />
      <Text>Afternoon</Text>
      <FlatList
        data={BEE}
        renderItem={({ item }) => <Item title={item.title} color="#3f51b5" />}
        keyExtractor={item => item.id}
      />
      <Text>Evening</Text>
      <FlatList
        data={WOO}
        renderItem={({ item }) => <Item title={item.title} color="#2196f3" />}
        keyExtractor={item => item.id}
      />
      <Text>Morning</Text>
      <FlatList
        data={DEE}
        renderItem={({ item }) => <Item title={item.title} color="#9c27b0" />}
        keyExtractor={item => item.id}
      />
      <Text>Afternoon</Text>
      <FlatList
        data={REE}
        renderItem={({ item }) => <Item title={item.title} color="#ff9800" />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
});

export default App;
