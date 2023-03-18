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

export default function MainScreen() {
    return (
     <SafeAreaView style={styles.container}>
       <View style={styles.innerContainer}>
         <Text style={styles.title}>Main Screen</Text>
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
});
