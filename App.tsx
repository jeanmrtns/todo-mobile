import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        backgroundColor="transparent"
        style="light"
        translucent
      />
    </>
  );
}
