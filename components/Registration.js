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
          <Button
            color="red"
            title={'X'}
            onPress={() => {
              this.props.delete(this.props.id);
            }}
          />
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    itemTime: {
      fontSize: 17,
      color: 'darkorange',
      flex: 1,
    },
    itemText: {
      fontSize: 20,
      borderBottomColor: 'darkorange',
      borderBottomWidth: 1,
      flex: 6,
    },
    item: {
      alignItems: 'stretch',
      flexDirection: 'row',
    },
  });
}
