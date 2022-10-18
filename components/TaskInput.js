import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/task.png')}
                    style={styles.image}
                />
                <TextInput
                style={styles.textInput}
                placeholder="Your task"
                onChangeText={taskInputHandler}
                value={enteredTaskText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#949293" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add task" onPress={addTaskHandler} color="#F2B705" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default TaskInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F27405',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        color: '#000000',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    image: {
        width: 76,
        height: 67,
        margin: 20,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});