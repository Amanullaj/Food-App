import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,View,} from 'react-native';
import Navigation from './Navigation';
import { Provider } from 'react-redux'
import { store } from './Store';

const App = () => {
  return(
      <Provider store={store}>
      <Navigation />
      </Provider>
      )
}
 

const styles = StyleSheet.create({
  main : {flex:1}
});

export default App;
