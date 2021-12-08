import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState('');

  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    //when we press that button. Now a tiny side note, when working with set course goals, course goals here is our previous state and the way React updates the state,this should always be your most current state snapshot but it's not 100% guaranteed, to have that 100% guarantee, when you update your state based on the old state, you can use the function form of this set function where you don't pass the value of your new state here but instead you pass it in a function, typically an anonymous function where you get your current state
    // setCourseGoal([...courseGoal, enteredGoal]);
    setCourseGoal((currentGoals) => [...courseGoal, enteredGoal]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.textInput}
          onChangeText={inputHandler}
        />
        <Button title='Add' onPress={addGoalHandler} />
      </View>
      <View></View>
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
