import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Ionicons name="checkmark-circle" size={32} color="green" />
    </View>
  );
}