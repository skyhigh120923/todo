import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ToDoList tasks={tasks} />
            </ScrollView>
            <ToDoForm addTask={addTask} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
