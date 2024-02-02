import { useState } from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}, ]);
  }

  return (
    <View style={styles.appcontainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
        }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
   