import {
    Image,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Button,
} from 'react-native'
import Images from '../assets/images'

export default function MainScreen() {
    return (
     <SafeAreaView style={styles.container}>
       <View style={styles.innerContainer}>
         <Text style={styles.title}>Jack White</Text>
           <View style={styles.messageList}>
           </View>
           <View style={styles.footer}>
             <TextInput
               placeholder="Message..."
               style={styles.messageInput}
             />
             <Button
               title="Send"
               style={styles.sendButton}
             />
           </View>

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
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  messageList: {
    backgroundColor: '#ffffff',
    width: '90%',
    flex: 1,
    marginVertical: 20,
    borderRadius: 10
  },
  footer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 20,
  },
  messageInput: {
    fontSize: 18,
    borderColor: '#E2E2E7',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    flex: 1,
  },
  sendButton: {
  }
});
