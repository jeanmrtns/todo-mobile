import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  listHeaderItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  createdText: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
  },
  finishedText: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold'
  },
  counter: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    marginLeft: 8,
    borderRadius: 999,
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2
  }
})