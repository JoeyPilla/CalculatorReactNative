import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function App({ pressed, number }) {
  return (
    <View style={styles.container}>
      <Button
        title={number.toString()}
        color="#fff"
        accessibilityLabel="Number 1"
        backgroundColor="black"
        onPress={() => pressed(number.toString())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#FFF',
    backgroundColor: '#000',
  },
});
