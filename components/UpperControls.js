import {
  View,
  ToastAndroid,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import Time from './Time';

export default function ({addItem, clearItems}) {
  const [name, setName] = useState('nicht gesetzt');
  const styles = StyleSheet.create({
    nameInput: {
      borderBottomColor: 'orange',
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 20,
    },
  });

  return (
    <View>
      <Header title={'RDP-Anmeldung: ' + name} />
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
          onPress={() => {
            ToastAndroid.showWithGravityAndOffset(
              `Angemeldet als '${name}'`,
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              0,
              50,
            );
            addItem(name);
          }}
        />
        <Button
          title="Elemente Leeren"
          color="red"
          onPress={() => {
            clearItems();
          }}
        />

        <View
          style={{
            borderBottomColor: 'orange',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        />
      </View>
    </View>
  );
}
