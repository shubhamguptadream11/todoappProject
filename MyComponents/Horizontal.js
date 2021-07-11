import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {dark, light} from './theme';

const Horizontal = ({isEnabled, incomplete, complete}) => {

  const text ={
    width: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color:isEnabled ? dark.fontColor : light.fontColor,
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.left} />
      <View>
        <Text style={text}>
          {complete}/{complete + incomplete}
        </Text>
      </View>
      <View style={styles.right} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    height: 1,
    backgroundColor: '#989898',
  },
  right: {
    flex: 1,
    height: 1,
    backgroundColor: '#989898',
  },
  
});
export default Horizontal;
