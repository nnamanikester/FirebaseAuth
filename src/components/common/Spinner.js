import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = ({size, color}) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size={size || 'large'} color={color || 'blue'} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Spinner};
