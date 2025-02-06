import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const DATA = [ 
  { id: '1', title: 'Buy groceries' },
  { id: '2', title: 'Clean the house' },
  { id: '3', title: 'Finish React Native project' },
];
const LOAD = [
  { id: '1', title: 'WOrk hard' },
  { id: '2', title: 'WAtch movie' },
  { id: '3', title: 'Finish activity' },
];
const JOY = [
  { id: '1', title: 'WOrk hard' },
  { id: '2', title: 'WAtch movie' },
  { id: '3', title: 'Finish activity' },
];
const MEE = [
  { id: '1', title: 'WOrk hard' },
  { id: '2', title: 'WAtch movie' },
  { id: '3', title: 'Finish activity' },
];
const BEE = [
  { id: '1', title: 'WOrk hard' },
  { id: '2', title: 'WAtch movie' },
  { id: '3', title: 'Finish activity' },
];
const WOO = [
  { id: '1', title: 'WOrk hard' },
  { id: '2', title: 'WAtch movie' },
  { id: '3', title: 'Finish activity' },
];

const DEE = [
  { id: '1', title: 'WOrk hard' },
  { id: '2', title: 'WAtch movie' },
  { id: '3', title: 'Finish activity' },
];

const REE = [
  { id: '1', title: 'WOrk hard' },
  { id: '2', title: 'WAtch movie' },
  { id: '3', title: 'Finish activity' },
  { id: '3', title: 'Finish activity' },
];
type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>  
    <Text>Morning</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text>Afternoon</Text>
      <FlatList
        data={LOAD}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text>Evening</Text>
      <FlatList
        data={JOY}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text>Morning</Text>
      <FlatList
        data={MEE}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text>Afternoon</Text>
      <FlatList
        data={BEE}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text>Evening</Text>
      <FlatList
        data={WOO}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text>Morning</Text>
      <FlatList
        data={DEE}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text>Afternoon</Text>
      <FlatList
        data={REE}
        renderItem={({ item }) => <Item title={item.title} />}
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24, 
  },
});

export default App;
