import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function () {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  setInterval(() => setCurrentTime(new Date().toLocaleString()), 1000);

  return <Text style={styles.headerText}>{currentTime}</Text>;
}

const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'right',
  },
});
