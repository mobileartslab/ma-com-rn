import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, View, SafeAreaView, TextInput, Button} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import Images from '../../assets/images'
import * as ValidationConstants from '../constants/validation'
import {INIT, LOGIN} from "../state/action_types";
import {action} from "../state/actions";
import {STATUS_AUTHENTICATED, STATUS_INVALID_PASSWORD, STATUS_NOT_FOUND} from "../constants/constants";

export default function LoginScreen({ navigation }) {
  const app = useSelector((state) => state.app)

  const dispatch = useDispatch()
  useEffect(() => {
    resetErrors()
    resetFields()
    dispatch(action({ type: INIT }))
  }, [])

  useEffect(() => {
    const status = app?.user?.authStatus
    console.log('CHECKING user.authStatus', status)
    if (status === STATUS_AUTHENTICATED) {
      navigation.navigate('Main')
    }
    else if (status === STATUS_NOT_FOUND || status === STATUS_INVALID_PASSWORD) {
      errors.submit = 'Invalid Login'
      const newErrors = errors
      setErrors({ ...errors, ...newErrors })
    }
  }, [app.user])


  const fieldsType = {
    email: '',
    password: '',
  }

  const errorsType = {
    email: '',
    password: '',
    submit: '',
  }

  const [fields, setFields] = useState(fieldsType)
  const [errors, setErrors] = useState(errorsType)

  const handleFieldChange = (field, value) => {
    fields[field] = value
    const newFields = fields
    setFields({ ...fields, ...newFields })
  }

  const resetErrors = () => {
    const newErrors = errors
    errors.email = ''
    errors.password = ''
    errors.submit = ''
    setErrors({ ...errors, ...newErrors })
  }

  const resetFields = () => {
    const newFields = fields
    fields.email = ''
    fields.password = ''
    setFields({ ...fields, ...newFields })
  }

  const validate = () => {
    let isValid = true
    resetErrors()

    if (!fields.email) {
      isValid = false
      errors.email = 'Email Required'
    }

    if (fields.email && !ValidationConstants.EMAIL.test(fields.email)) {
      isValid = false
      errors.email = 'Please enter a valid email'
    }

    if (!fields.password) {
      isValid = false
      errors.password = 'Password Required'
    }

    if (!isValid) {
      const newErrors = errors
      setErrors({ ...errors, ...newErrors })
    }

    return isValid
  }


  const handleSubmit = () => {
    if (!validate()) {
      return
    }
    dispatch(action({ type: LOGIN, data: { username: fields.email, password: fields.password } }))
  }


    return (
     <SafeAreaView style={styles.container}>
       <View style={styles.innerContainer}>
         <Text style={styles.title}>Communicator</Text>
         <Image source={Images.appLogo} style={styles.logo} />
         <View style={styles.spacer30} />
         <TextInput
           style={styles.input}
           placeholder="username"
           value={fields.username}
           autoCapitalize="none"
           onChangeText={(text) => handleFieldChange('email', text)}
         />
         {errors.email && (
           <View style={styles.errorRow}>
             <AntDesign name="exclamationcircle" size={16} color="red"/>
             <Text color="white">{errors.email}</Text>
           </View>)}
         <TextInput
           style={styles.input}
           placeholder="password"
           autoCapitalize="none"
           value={fields.password}
           onChangeText={(text) => handleFieldChange('password', text)}
           secureTextEntry
         />
         {errors.password && (
           <View style={styles.errorRow}>
             <AntDesign name="exclamationcircle" size={16} color="red"/>
             <Text color="white" ml="1">{errors.password}</Text>
           </View>)}
         <View style={styles.spacer20} />
         <Button title="Log In" onPress={handleSubmit} />
         {errors.submit && (
           <View style={styles.submitErrorRow}>
             <AntDesign name="exclamationcircle" size={16} color="red"/>
             <Text color="white">{errors.submit}</Text>
           </View>)}
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
    errorRow: {
      width: 250,
      flexDirection: 'row',
      gap: 10,
    },
    submitErrorRow: {
      width: 250,
      flexDirection: 'row',
      gap: 10,
      marginTop: 20,
      justifyContent: 'center'
  }
});
