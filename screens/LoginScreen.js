import {
    Image,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Button
} from 'react-native'
import Images from '../assets/images'

export default function LoginScreen({ navigation }) {
    return (
     <SafeAreaView style={styles.container}>
       <View style={styles.innerContainer}>
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
           <Button title="Log In" onPress={() => navigation.navigate('Main')}/>
       </View>
     </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flex: 1
    },
    innerContainer: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '500',
        marginVertical: 10
    },
    input: {
        width: 250,
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
