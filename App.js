import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ToastAndroid,
} from 'react-native';
import Header from './components/Header';
import Time from './components/Time';

export default App = () => {
  const [name, setName] = useState('nicht gesetzt');

  return (
    <View>
      <Header title={'RDP-Anmeldung: ' + name}></Header>
      <View style={{padding: 10}}>
        <Time />
        <Text>Name:</Text>
        <TextInput
          style={styles.nameInput}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Button
          title="Formular jetzt absenden"
          color="orange"
          onPress={() =>
            ToastAndroid.showWithGravityAndOffset(
              `Angemeldet als '${name}'`,
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              0,
              50,
            )
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameInput: {
    borderBottomColor: 'orange',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
  },
});
