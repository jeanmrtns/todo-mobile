import { Text, View } from "react-native";
import PaperIcon from '../../assets/paper-icon.svg'
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <PaperIcon />
      <Text style={styles.bold}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.normal}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}