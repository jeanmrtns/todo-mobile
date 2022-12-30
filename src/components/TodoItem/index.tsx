import { Text, TouchableOpacity, View } from "react-native";

import TrashIcon from '../../assets/trash-icon.svg';
import CheckIcon from '../../assets/check-icon.svg';
import { styles } from "./styles";

interface TodoItemProps {
  todo: {
    id: string
    text: string
    done: boolean
  }
  onDelete: () => void
  onToggle: () => void
}

export function TodoItem({todo, onDelete, onToggle}: TodoItemProps) {

  if (todo.done) {
    return (
      <View style={styles.containerDone}>
        <TouchableOpacity onPress={onToggle}>
          <CheckIcon />
        </TouchableOpacity>
        <Text style={styles.textDone}>
          { todo.text }
        </Text>
        <TouchableOpacity style={styles.deleteDone} onPress={onDelete}>
          <TrashIcon />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox} onPress={onToggle} />
      <Text style={styles.text}>
        { todo.text }
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
}