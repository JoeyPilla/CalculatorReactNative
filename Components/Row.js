import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';

export default function App({
  numberPress,
  operation,
  operationPress,
  starting,
}) {
  const arr = [starting, starting + 1, starting + 2];
  const rowOfButtons = arr.map(num => (
    <Button pressed={numberPress} number={num} />
  ));
  return <View style={styles.button}>{rowOfButtons}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#FFF',
    backgroundColor: '#000',
    flexDirection: 'row',
    width: 100,
  },
});
