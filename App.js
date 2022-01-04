import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    //when we press that button. Now a tiny side note, when working with set course goals, course goals here is our previous state and the way React updates the state,this should always be your most current state snapshot but it's not 100% guaranteed, to have that 100% guarantee, when you update your state based on the old state, you can use the function form of this set function where you don't pass the value of your new state here but instead you pass it in a function, typically an anonymous function where you get your current state
    // setCourseGoal([...courseGoal, enteredGoal]); <-- not Guarantee to update
    // setCourseGoal((currentGoals) => [...courseGoals, enteredGoal]); <--- not suitable anymore when you are using FlatList
    setCourseGoal((currentGoals) => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false); //makes the modal invisable after a goal is added
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visable={isAddMode}
        onCancel={cancelGoalAditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={removeGoalHandler}
            title={itemData.item.value}
            id={itemData.item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
