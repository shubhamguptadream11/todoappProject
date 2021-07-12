import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MainButton from './MainButton';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {FunctionProvider} from './FunctionProvider';
import { dark, light } from './theme';

const TodoItem = ({item, action,isEnabled}) => {
  const {updateTask, deleteItems} = useContext(FunctionProvider);
  const backgroundColor = isEnabled?dark.itemColor:light.itemColor;

  const   listTextInComplete={
    fontSize: 20,
    flexWrap: 'wrap',
    fontFamily: 'RobotoSlab-Regular',
    color:isEnabled?dark.fontColor:light.fontColor,
  }
  const   listTextComplete = {
    textDecorationLine: 'line-through',
    fontSize: 20,
    fontFamily: 'RobotoSlab-Regular',
    color:isEnabled?dark.fontColor:light.fontColor,
  }

  return (
    <View style={{...styles.listTextContainer,backgroundColor:backgroundColor}}>
      <View style={styles.left}>
        <MainButton
          style={{marginHorizontal: 10}}
          onPress={updateTask.bind(this, item, action)}>
          <FontAwesome5Icon
            name={action !== 'completed' ? 'check-double' : 'dot-circle'}
            size={15}
          />
        </MainButton>
        <View style={styles.textWrap}>
          <Text
            style={
              action !== 'completed'
                ? listTextComplete
                : listTextInComplete
            }>
            {item.value}
          </Text>
        </View>
      </View>
      <View style={styles.right}>
        <MainButton onPress={deleteItems.bind(this, item, action)}>
          <FontAwesome5Icon name="trash-alt" size={15} />
        </MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listTextContainer: {
    padding: 8,
    marginVertical: 10,
    borderRadius: 20,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    width: '90%',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  textWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});

export default TodoItem;
