import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    padding: 15,
    backgroundColor: 'darkorange',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
});