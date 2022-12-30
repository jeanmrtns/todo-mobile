import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { EmptyList } from "../../components/EmptyList";
import { Logo } from "../../components/Logo";
import { PlusIcon } from "../../components/PlusIcon";
import { TodoItem } from "../../components/TodoItem";
import { TodoListHeader } from "../../components/TodoListHeader";
import { styles } from "./styles";

interface Task {
  id: string;
  text: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  const [isFocused, setIsFocused] = useState(false);

  function handleAddNewTask() {
    if (!newTaskText) return;

    const newTask: Task = {
      id: new Date().toString(),
      text: newTaskText,
      done: false
    };
    setTasks(prevState => [...prevState, newTask]);
    setNewTaskText('');
  }

  function handleDeleteTask(id: string) {
    setTasks(prevState => {
      return prevState.filter(task => task.id !== id);
    })
  }

  function handleToggleDone(id: string) {
    const taskToUpdate = tasks.find(task => task.id === id);

    if (!taskToUpdate) return;

    taskToUpdate.done = !taskToUpdate.done;

    setTasks(prevState => {
      return prevState.map(task => task.id === taskToUpdate.id ? taskToUpdate: task);
    });

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={{...styles.input, borderColor: isFocused ? '#5E60CE': '#0D0D0D' }}
          onChangeText={setNewTaskText}
          value={newTaskText}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddNewTask}
        >
          <Text>
            <PlusIcon />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        <TodoListHeader tasks={tasks} />

        <FlatList
          data={tasks}
          renderItem={({item}) => (
            <TodoItem
              todo={item}
              onDelete={() => handleDeleteTask(item.id)}
              onToggle={() => handleToggleDone(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  )
}