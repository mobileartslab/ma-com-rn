import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button
} from 'react-native';
import Images from './assets/images'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Communicator</Text>
      <Image source={Images.appLogo} style={styles.logo} />
      <View style={styles.spacer30} />
      <TextInput
        style={styles.input}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry
      />
      <View style={styles.spacer20} />
      <Button
        title="Log In"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 80,
    marginHorizontal: 50
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    marginVertical: 10
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 3,
  },
  logo: {
    marginVertical: 20,
    height: 200,
    resizeMode: 'contain'
  },
  spacer20: {
    height: 20
  },
  spacer30: {
    height: 30
  },
});
