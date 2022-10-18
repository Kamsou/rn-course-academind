import {StyleSheet, View, Text, Pressable} from 'react-native';

function TaskItem(props) {
    return (
        <View style={styles.taskItem}>
            <Pressable 
                android_ripple={{color: '#000000'}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.taskText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default TaskItem;

const styles = StyleSheet.create({
    taskItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#F2B705',
    },
    pressedItem: {
        opacity: 0.5,
    },
    taskText: {
      color: 'white',
      padding: 8,
    },
  });