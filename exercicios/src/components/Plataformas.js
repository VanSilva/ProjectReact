import React from 'react'
import { Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props => {
  const notificar = msg => {
    if(Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.LONG)
    }else {
      Alert.alert('informação', msg)
    }
  }

  return (
    <Button title='Quer saber qual a plataforma?'
      onPress={() =>notificar('Android!')}/>
  )
}