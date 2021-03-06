import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Registration extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <View style={{padding: 5}}>
        <Text style={this.styles.itemTime}>{this.props.registrationTime}</Text>
        <View style={this.styles.item}>
          <Text style={this.styles.itemText}>{this.props.registeredName}</Text>
          <Button color="red" title={'X'} />
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    itemTime: {
      fontSize: 17,
      color: 'darkorange',
    },
    itemText: {
      fontSize: 20,
      width:'90%',
      borderBottomColor: 'darkorange',
      borderBottomWidth: 1,
    },
    item: {
      alignItems: 'stretch',
      flex: 2,
      flexDirection: 'row'
      },
  });
}
