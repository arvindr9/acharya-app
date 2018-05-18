import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <View style = {styles.container}>
            <Text> You have reached a modal </Text>
        </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });