import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTaskHandler(enteredTaskText) {
    setTasks(currentTasks => [...currentTasks, {text: enteredTaskText, id: Math.random().toString()}]);
  }

  function deleteTaskHandler(taskId) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId);
    });
  }

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTaskHandler} />

      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          alwaysBounceVertical={false}
          renderItem={itemData => {
            return (
              <TaskItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteTaskHandler}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
  },
});
