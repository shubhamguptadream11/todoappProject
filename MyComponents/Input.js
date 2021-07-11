import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import MainButton from './MainButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {light, dark} from './theme';

const Input = ({isEnabled, task, settask, addTask}) => {

  const  input =  {
    borderBottomWidth: 2,
    borderColor: 'black',
    width: '70%',
    fontSize: 20,
    fontFamily: 'RobotoSlab-Regular',
    borderColor:isEnabled ? dark.borderColor : light.borderColor,
    color:isEnabled ? dark.fontColor : light.fontColor,

  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={input}
        placeholder="Add Today's Work"
        onChangeText={e => settask(e)}
        value={task}
        placeholderTextColor={isEnabled ? dark.placeColor : light.placeColor}
        multiline={true}
      />

      <MainButton style={styles.btn} onPress={addTask.bind(this, task)}>
        <FontAwesome5 name="plus" size={25} />
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
  },
});
export default Input;
