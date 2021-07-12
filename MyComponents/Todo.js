import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TodoItem from './TodoItem';

const Todo = ({
  incompleteTask,
  completedTask,
  isEnabled
}) => {
  return (
    <View style={styles.listContainer}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {(incompleteTask.length!==0)?(incompleteTask.map(item => (
          <TodoItem
            action="completed"
            item={item}
            key={item.id}
            isEnabled={isEnabled}
          />
        ))):null}
        {(completedTask.length!==0)?(completedTask.map(item => (
          <TodoItem
            action="incompleted"
            item={item}
            key={item.id}
            isEnabled={isEnabled}
          />
        ))):null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
  },
});
export default Todo;
