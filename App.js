import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default class App extends Component {
state = {
  placeName: '',
  places: []
}

placeNameChangedHandler = val => {
  this.setState({
    placeName: val
  });
};

placeSubmitHandler = () => {
  if (this.state.placeName.trim() === '') {
    return;
  }

  this.setState(prevState => {
    return {
      places: prevState.places.concat(prevState.placeName)
    };
  });
};

  render() {
    const placesOutPut = this.state.places.map((place, i) => <Text key={i}>{place}</Text>);
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
          />
          <Button
            title='Add'
            onpress={this.placeSubmitHandler}
            style={styles.Button}
          />
        </View>
        <View>
          {placesOutPut}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: 300,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30&'
  }
});
