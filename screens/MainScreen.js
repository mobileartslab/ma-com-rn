import React, { useState, useRef } from 'react'
import {Image, StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList,} from 'react-native'
import Images from '../assets/images'

const nick = { id: 1, name: 'nick', avatar: ''}
const jack = { id: 2, name: 'jack', avatar: ''}
const senderId = 2
const messageData = [
  { id: 1, content: 'The big three killed my baby, No money in my hand again', senderId: 2, recipientId: 1 },
  { id: 2, content: 'Ah, icky thump, who\'da thunk? Sittin\' drunk on a wagon to Mexico', senderId: 1, recipientId: 2 },
  { id: 3, content: 'The big three killed my baby, Nobody\'s comin\' home again', senderId: 2, recipientId: 1 },
  { id: 4, content: 'Why don\'t you take the day off and try to repair? A billion others don\'t seem to care Better ideas are stuck in the mud', senderId: 2, recipientId: 1 },
  { id: 5, content: 'Left alone, I hit myself with a stone Went home and learned how to clean up after myself', senderId: 2, recipientId: 1 },
  { id: 6, content: 'And my baby\'s my common sense So don\'t feed me planned obsolescence', senderId: 1, recipientId: 2 },
]


const Message = ({ message }) => {
  const { id, content, recipientId } = message;
  return (
    <View style={senderId == message.senderId ? styles.messageSender : styles.messageRecipient}>
      <Text style={senderId == message.senderId ? styles.messageSenderText : styles.messageRecipientText}>{content}</Text>
    </View>
  );
};

export default function MainScreen() {
  const [messages, setMessages] = useState(messageData)
  const [message, setMessage] = useState('')
  const flatlistRef = useRef();

  const addMessage = () => {
    if (message.length > 0) {
      const newMessage = {id: messages.length + 1, content: message, senderId: 1, recipientId: 2}
      const newMessages = messages
      newMessages[messages.length] = newMessage
      setMessages(newMessages)
      setMessage('')
    }
  }

    return (
     <SafeAreaView style={styles.container}>
         <View style={styles.header}>
           <Image source={Images.senderAvatar} style={styles.avatar} />
           <Text style={styles.title}>Jack White</Text>
         </View>
       <View style={styles.innerContainer}>
           <View style={styles.messageList}>
             <FlatList
               ref={flatlistRef}
               style={styles.messages}
               data={messages}
               renderItem={({ item }) => (
                 <Message message={item} />
               )}
               keyExtractor={(item) => item.id}
               onContentSizeChange={()=> flatlistRef.current.scrollToEnd()}
             />
           </View>
           <View style={styles.footer}>
             <TextInput
               placeholder="Message..."
               style={styles.messageInput}
               value={message}
               onChangeText={(text) => setMessage(text)}
             />
             <Button
               title="Send"
               style={styles.sendButton}
               onPress={addMessage}
             />
           </View>

       </View>
     </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  innerContainer: {
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    width: '100%',
    flex: 1
  },
  messageList: {
    backgroundColor: '#ffffff',
    width: '90%',
    flex: 1,
    marginVertical: 20,
    padding: 20,
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
  },
  messageSender: {
    backgroundColor: '#F2F2F7',
    width: '100%',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  messageRecipient: {
    backgroundColor: '#3478F6',
    width: '100%',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  messageSenderText: {
    fontSize: 18,
    lineHeight: 22
  },
  messageRecipientText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 22
  },
  messages: {
    flex: 1
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  header: {
    flexDirection: "row",
    backgroundColor: '#F2F2F7',
    paddingTop: 15,
    paddingLeft: 30,
    gap: 15
  }


});
