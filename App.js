import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Main" component={MainScreen} options={{ headerBackVisible: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
