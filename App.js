import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  function startAddTaskHandler() {
    setIsVisibleModal(true);
  }

  function closeAddTaskHandler() {
    setIsVisibleModal(false);
  }

  function addTaskHandler(enteredTaskText) {
    setTasks(currentTasks => [...currentTasks, {text: enteredTaskText, id: Math.random().toString()}]);
    closeAddTaskHandler();
  }

  function deleteTaskHandler(taskId) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId);
    });
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Button
          title="Add new task"
          color="#F2B705"
          onPress={startAddTaskHandler}
        />

        <TaskInput
          visible={isVisibleModal}
          onAddTask={addTaskHandler}
          onCancel={closeAddTaskHandler}
        />

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
    </>
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
