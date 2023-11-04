import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';

const ToDoList = ({ tasks }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Pressable>
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>Do laundry</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task]}>
                        <Text style={styles.taskText}>Go to gym</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>Walk dog</Text>
                    </View>
                </Pressable>
                {tasks.map((task, index) => (
                    <Pressable key={index}>
                        <View style={task.completed ? [styles.task, styles.completed] : styles.task}>
                            <Text style={styles.taskText}>{task.text}</Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 18,
        color : 'black',
    },
});

export default ToDoList;
