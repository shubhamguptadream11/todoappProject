import React from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';
import {light, dark} from './theme';

const Header = ({isEnabled, title, toggleSwitch}) => {

  //Either to write it in this way
  const titleContainer = {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 10,
    height: 100,
    borderBottomEndRadius: 90,
    backgroundColor:isEnabled ? dark.header : light.header,
  }

  const titleBox = {
    fontSize: 40,
    fontFamily: 'ZenTokyoZoo-Regular',
    fontWeight: '600',
    color:isEnabled ? dark.fontColor : light.fontColor,
  }

  return (
    <View style={titleContainer}>
      <View style={styles.switch}>
        <Switch
          trackColor={{false: '#767577', true: 'white'}}
          thumbColor={isEnabled ? '#308D46' : 'white'}
          ios_backgroundColor="grey"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.titleBox}>
        <Text style={titleBox}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  titleBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  switch:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginEnd:10
  },
});
export default Header;
