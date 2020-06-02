import React from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Linking } from "react-native";

import { AuthContext } from '../context';

import { } from './styles';

import firebase from 'firebase';

import * as MailComposer from 'expo-mail-composer';


export default SignIn = ({ navigation }) => {

  const { signIn } = React.useContext(AuthContext)

  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  const message = `Onibus do Anonimato`;


  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(textEmail, textPassword)
      .then(() => signIn())
      .catch(error => alert(error))

  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Anonimato',
      recipients: ['onibus.anonimato@gmail.com'],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5521999999999&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.view_fields}>
        <TextInput
          style={styles.input_auth}
          onChangeText={text => setTextEmail(text.toLowerCase())}
          value={textEmail} />

        <TextInput
          style={styles.input_auth}
          onChangeText={text => setTextPassword(text)}
          value={textPassword} secureTextEntry={true} />
      </View>
      <Button title="Acessar" onPress={() => handleSignIn()} />
      <Button title="Criar Conta" onPress={() => navigation.push("CreateAccount")} />

      <View>
        <Text style={styles.actionText2}>Entre em contato por: </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
          <Text style={styles.actionText}>WhatsApp </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={sendMail}>
          <Text style={styles.actionText}>E-mail </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  input_auth: {
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    borderRadius: 3,
    margin: 10,
    marginTop: 0,
    padding: 4
  },
  view_fields: {
    flexDirection: 'column',
    width: '100%',
    height: 100
  },

  actions: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold' 
  },

  actionText2: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold' 
  }
});