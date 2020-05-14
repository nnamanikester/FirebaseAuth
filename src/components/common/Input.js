import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, hidden}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={hidden}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {Input};
