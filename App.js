import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Acharyas from './components/tabs/Acharyas';
import Modal from './components/screens/Modal';
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: { screen: App },
  Settings: { screen: SettingsScreen },
  Acharyas: {screen: Acharyas},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const navigator = createStackNavigator(
  {
    Home: {
      screen: App
    },
    Acharyas: {
      screen: Acharyas
    },
    Modal: {
      screen: Modal
    }
  }
)
