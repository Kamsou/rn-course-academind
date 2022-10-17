import {StyleSheet, View, TextInput, Button} from 'react-native';
import { useState } from 'react';

function TaskInput(props) {
    const [enteredTaskText, setEnteredTaskText] = useState('');

    function taskInputHandler(enteredText) {
        setEnteredTaskText(enteredText);
    }

    function addTaskHandler() {
        props.onAddTask(enteredTaskText);
        setEnteredTaskText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.textInput}
            placeholder="Your task"
            onChangeText={taskInputHandler}
            value={enteredTaskText}
            />
            <Button title="Add task" onPress={addTaskHandler} />
        </View>
    )
}

export default TaskInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});