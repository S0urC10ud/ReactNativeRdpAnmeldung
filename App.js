import React, {useState, useEffect} from 'react';
import {Alert, FlatList} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Registration from './components/Registration';
import {v4 as uuidv4} from 'uuid';
import UpperControls from './components/UpperControls';

export default App = () => {
  const [items, setItems] = useState(null);
  const getNewEntry = (name) => {
    return {id: uuidv4(), itemName: name, time: new Date().toLocaleString()};
  };

  useEffect(() => {
    if (items != null)
      AsyncStorage.setItem('Anmeldungen', JSON.stringify(items)).then(() =>
        AsyncStorage.getItem('Anmeldungen').then((data) => {
          Alert.alert('Wrote: ' + JSON.stringify(data));
        })
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
    <FlatList
      ListHeaderComponent={
        <UpperControls
          addItem={(name, time) => {
            items != null
              ? setItems([...items, getNewEntry(name)])
              : setItems([getNewEntry(name)]);
          }}
          clearItems={() => setItems([])}
        />
      }
      data={items}
      renderItem={({item}) => (
        <Registration
          id={item.id}
          registeredName={item.itemName}
          registrationTime={item.time}
          delete={() => {
            setItems(items.filter((innerItem) => innerItem.id != item.id));
          }}
        />
      )}
    />
  );
};
