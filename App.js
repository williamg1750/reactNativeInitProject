import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const inputHandler = (enteredText) => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = (enteredGoal) => {
    console.log(enteredGoal);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.textInput}
          onChangeText={inputHandler}
        />
        <Button title='Add' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
});
