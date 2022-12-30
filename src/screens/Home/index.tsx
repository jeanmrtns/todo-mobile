import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { EmptyList } from "../../components/EmptyList";
import { Logo } from "../../components/Logo";
import { PlusIcon } from "../../components/PlusIcon";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  const [isFocused, setIsFocused] = useState(false)

  function handleAddNewTask() {
    if (!newTaskText) return
    setTasks(prevState => [...prevState, newTaskText])
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
        <View style={styles.listHeader}>
          <View style={styles.listHeaderItem}>
            <Text style={styles.createdText}>
              Criadas
            </Text>
            <Text style={styles.counter}>0</Text>
          </View>

          <View style={styles.listHeaderItem}>
            <Text style={styles.finishedText}>
              Concluídas
            </Text>
            <Text style={styles.counter}>0</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          renderItem={task => <Text>oi</Text>}
          keyExtractor={item => item}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  )
}