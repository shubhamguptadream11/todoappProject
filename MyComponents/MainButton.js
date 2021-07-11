import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <View style={{...styles.btnContainer, ...props.style}}>
        <Text style={styles.btnText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#308D46',
    borderRadius: 100,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default MainButton;
