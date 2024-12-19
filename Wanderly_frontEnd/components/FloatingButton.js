import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ClickContext } from '../context/ClickContext';

export default function FloatingButton() {
  const { clickCount } = useContext(ClickContext);

  return (
    <TouchableOpacity style={styles.floatingButton}>
      <Text style={styles.text}>{clickCount}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: '60%',
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  text: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
