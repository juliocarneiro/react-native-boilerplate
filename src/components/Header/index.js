import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Icon name="ios-arrow-back" size={24} style={styles.icon} />
    <Text style={styles.title}>App</Text>
    <Icon name="ios-more" size={24} style={styles.icon} />
  </View>
);

export default Header;