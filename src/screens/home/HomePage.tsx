import {View, Text, FlatList, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './Style';
import {fetchToDoList} from './api/TodoListApi';
import Task from './components/Task';

export default function HomePage() {
  const [toDoList, setToDoList] = useState();

  const renderItem = (item: any) => {
    return <Task item={item} />;
  };

  useEffect(() => {
    fetchToDoList().then(data => setToDoList(data));
  }, []);

  return (
    <View style={[style.container]}>
      <SafeAreaView>
        <StatusBar backgroundColor={'#eff2f3'} barStyle={'dark-content'} />
      </SafeAreaView>
      <Text style={[style.title]}>Todo List</Text>
      <FlatList
        style={[style.mt32]}
        data={toDoList}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
}
