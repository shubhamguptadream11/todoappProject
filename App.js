import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import Header from './MyComponents/Header';
import Horizontal from './MyComponents/Horizontal';
import Input from './MyComponents/Input';
import Todo from './MyComponents/Todo';
import {light, dark} from './MyComponents/theme';
import {FunctionProvider} from './MyComponents/FunctionProvider';

const App = () => {
  //To store all completed task
  const [completedTask, setCompletedTask] = useState([]);
  //To store all incomplete task
  const [incompleteTask, setincompleteTask] = useState([]);
  //To control theme color
  const [isEnabled, setisEnabled] = useState(false);
  //To set task in TextInput
  const [task, settask] = useState('');

  //Function to toggle theme
  const toggleSwitch = () => setisEnabled(prev => !prev);

  //Function to add task
  function addTask(newTask) {
    if (!newTask.length) {
      console.log('Please write something');
      return;
    }
    newTask = newTask.trim();
    setincompleteTask(tasks => [{id: Date.now(), value: newTask}, ...tasks]);
    settask('');
  }

  //Function to update task whether is completed or not
  function updateTask(item, action) {
    if (action === 'completed') {
      setincompleteTask(tasks =>
        tasks.filter(prevtask => prevtask.id !== item.id),
      );
      setCompletedTask(() => [...completedTask, item]);
    } else if (action === 'incompleted') {
      setCompletedTask(tasks =>
        tasks.filter(prevtask => prevtask.id !== item.id),
      );
      setincompleteTask(previncompleteTask => [...previncompleteTask, item]);
    }
  }

  //Function To delete task
  function deleteItems(item, action) {
    if (action === 'completed')
      setincompleteTask(tasks =>
        tasks.filter(prevtask => prevtask.id !== item.id),
      );
    else if (action === 'incompleted')
      setCompletedTask(tasks =>
        tasks.filter(prevtask => prevtask.id !== item.id),
      );
  }

  const bgcolor = isEnabled ? dark.backgroundColor : light.backgroundColor;

  return (
    <SafeAreaView style={{...styles.screenMain, backgroundColor: bgcolor}}>
      <StatusBar barStyle={isEnabled ? 'dark-content' : 'light-content'} />

      <Header title="DO-IT" isEnabled={isEnabled} toggleSwitch={toggleSwitch} />

      <View style={{...styles.screen, backgroundColor: bgcolor}}>
        <Input
          addTask={addTask}
          task={task}
          settask={settask}
          isEnabled={isEnabled}
        />

        {incompleteTask.length + completedTask.length > 0 ? (
          <Horizontal
            isEnabled={isEnabled}
            incomplete={incompleteTask.length}
            complete={completedTask.length}
          />
        ) : null}

        <FunctionProvider.Provider
          value={{updateTask: updateTask, deleteItems: deleteItems}}>
          <Todo
            isEnabled={isEnabled}
            incompleteTask={incompleteTask}
            completedTask={completedTask}
          />
        </FunctionProvider.Provider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: 'white',
  },
});

export default App;
