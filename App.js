import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Components/Button';
import Row from './Components/Row';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: '',
    };
    this.numberPress = this.numberPress.bind(this);
  }

  numberPress(newNumber) {
    const { number } = this.state;
    this.setState({ number: number + newNumber });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.number}</Text>
        <Row
          starting={7}
          operation="*"
          numberPress={this.numberPress}
          operationPress={this.operationPress}
        />
        <Row
          starting={4}
          operation="/"
          numberPress={this.numberPress}
          operationPress={this.operationPress}
        />
        <Row
          starting={1}
          operation="/"
          numberPress={this.numberPress}
          operationPress={this.operationPress}
        />
      </View>
    );
  }
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
  },
});
