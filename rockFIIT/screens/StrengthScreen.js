import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  Styles,
} from "react-native";

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import styled from "styled-components";
import AddInput from "../components/AddInput";
import ToDoList from "../components/ToDoList";
import EmptyLifting from "../components/EmptyLifting"
import LogIn from './LogInScreen';
import AddExercise from "../components/AddExercise";
import Exercise from "../components/Exercise";
import DefaultList from "../components/DefaultList";

const StrengthScreen = ({ navigation }) => {
    const [isVisible, setisVisible] = useState(false);

  const [data, setData] = useState([]);
  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };
  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const navigateProgram = () => {
    navigation.navigate("Program");
  };

  return (
    <ComponentContainer>
      <View style={styles.headerContainer}>
        <HeaderText style={styles.programHeader}> </HeaderText>
        <DefaultList item={'Bench Press'} deleteItem={deleteItem} navigation={navigation}/>
        <DefaultList item={'Deadlift'} deleteItem={deleteItem} navigation={navigation}/>
        <DefaultList item={'Back Squat'} deleteItem={deleteItem} navigation={navigation}/>
        <DefaultList item={'Pull Ups'} deleteItem={deleteItem} navigation={navigation}/>
        
      </View>
      <View style={{ top: 600, marginLeft: 70}}>
        <AddExercise navigation={navigation}/>
            </View>

      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.key}
          renderItem={({  }) => (
            <DefaultList item={'Bench Press'} deleteItem={deleteItem} navigation={navigation}/>
          )}
        />
        
        <AddExercise navigation={navigation}/>
          </View>
    </ComponentContainer>
  );
};

const HeaderText = styled.Text`
  color: white;
  
  font-size: 30px;
  margin-top: 50px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C6B8C1",
  },
  headerContainer:{
    marginTop:250,
  },
  programHeader:{
    fontWeight:'bold',
    color:'black',
  }
});
const ComponentContainer = styled.View`
  background-color: #C6B8C1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default StrengthScreen;
