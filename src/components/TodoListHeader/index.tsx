import { Text, View } from "react-native";
import { styles } from "./styles";

interface Task {
  id: string
  text: string
  done: boolean
}

interface TodoListHeaderProps {
  tasks: Task[]
}

export function TodoListHeader({ tasks }: TodoListHeaderProps) {
  const tasksDone = tasks.reduce((acc, item) => {
    return item.done ? acc + 1 : acc
  }, 0);

  return (
      <View style={styles.listHeader}>
        <View style={styles.listHeaderItem}>
          <Text style={styles.createdText}>
            Criadas
          </Text>
          <Text style={styles.counter}>{tasks.length}</Text>
        </View>

      <View style={styles.listHeaderItem}>
        <Text style={styles.finishedText}>
          Concluídas
        </Text>
        <Text style={styles.counter}>{tasksDone}</Text>
      </View>
    </View>
  );
}