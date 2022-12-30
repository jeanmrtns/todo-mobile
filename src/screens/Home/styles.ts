import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    backgroundColor: '#0D0D0D',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: -24,
    paddingHorizontal: 24
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 16,
    color: '#F2F2F2',
    fontSize: 16
  },
  addButton: {
    marginLeft: 4,
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    marginTop: 32,
    paddingHorizontal: 24
  },
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