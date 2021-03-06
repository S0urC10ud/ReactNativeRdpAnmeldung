import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ToastAndroid,
  FlatList,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import Time from './components/Time';
import Registration from './components/Registration';

export default App = () => {
  const [name, setName] = useState('nicht gesetzt');
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (items != null)
      AsyncStorage.setItem('Anmeldungen', JSON.stringify(items)).then(() =>
        AsyncStorage.getItem('Anmeldungen').then((data) => {
          Alert.alert('Wrote: ' + JSON.stringify(data));
        }),
      );
  }, [items]);

  useEffect(() => {
    AsyncStorage.getItem('Anmeldungen')
      .then((elements) => {
        Alert.alert('Read:' + JSON.stringify(elements));
        setItems(JSON.parse(elements));
      })
      .catch((err) => {
        Alert.alert(JSON.parse(err));
      });
  }, []);

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
          onPress={() => {
            ToastAndroid.showWithGravityAndOffset(
              `Angemeldet als '${name}'`,
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              0,
              50,
            );

            if (items != null)
              setItems([
                ...items,
                {itemName: name, time: new Date().toLocaleString()},
              ]);
            else
              setItems([{itemName: name, time: new Date().toLocaleString()}]);
          }}
        />
        <Button
          title="Elemente Leeren"
          color="red"
          onPress={() => {
              setItems([]);
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
        <FlatList
          data={items}
          renderItem={({item}) => (
            <Registration
              id={item.id}
              registeredName={item.itemName}
              registrationTime={item.time}
            />
          )}
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
