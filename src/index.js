import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import './config/ReactotronConfig';

import Header from './components/Header';
import Tabs from './components/Tabs';

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#F8F8FA' }}>
    <Header />
    <ScrollView>
      <Text style={{padding:15}}>Text</Text>
    </ScrollView>
    <Tabs />
  </View>
);

export default console.tron.overlay(App);
