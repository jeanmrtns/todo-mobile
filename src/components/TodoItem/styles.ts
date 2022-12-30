import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 8
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#4EA8DE'
  },
  text: {
    fontSize: 14,
    color: '#F2F2F2',
    marginHorizontal: 8,
    width: 235
  },
  containerDone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 8
  },
  textDone: {
    fontSize: 14,
    width: 235,
    color: '#808080',
    marginHorizontal: 8,
    textDecorationColor: '#808080',
    textDecorationLine: 'line-through'
  },
  deleteDone: {
    opacity: 0.5
  }
})