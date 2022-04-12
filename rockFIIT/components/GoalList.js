import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";


export default function TodoList({ item, deleteItem }) {

    //KEEPS TRACK OF ICON CHANGE
    const [active, setActive] = useState(true);
    const handleChangeActive = () => {
        setActive((val) => {
            return !val;
        });

    };

  return (
    <ComponentContainer>
      <ListContainer style={styles.completeGoal}>
        <CircleContainer>
          <TouchableOpacity>
            <Entypo name ={active ? 'circle' : 'circle-with-cross'} size={23} color="black" onPress={() => handleChangeActive()}/>
            </TouchableOpacity>
          </CircleContainer>
        <View>
          <TextItem>{item.value}</TextItem>
        </View>
        <View style={styles.button}>
          <MaterialIcons name="delete" size={22} onPress={() => deleteItem(item.key)} />
        </View>
      </ListContainer>
    </ComponentContainer>
  );
}

const HeaderText = styled.View`
  margin-top: 5px;
`;

const ListContainer = styled.TouchableOpacity`
  background-color: whitesmoke;
  height: auto;
  width: 350px;
  border-radius: 15px;
  flex-direction: row;
`;

const CircleContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
  margin-top: 10px;
`;

const TextItem = styled.Text`
  color: black;
  width: 270px;
  height: auto;
  font-size: 20px;
  margin-right: 5px;
  margin-left: 10px;
  justify-content: center;
  margin-top: 12px;
  fontFamily: Georgia;
`;
//  font-family: poppins-regular;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    
  },
  button: {
    paddingRight: 150,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
  },
  incompleteGoal:{
    backgroundColor:'#FF7F7F',
  },
  completeGoal:{
    backgroundColor:'#90ee90',
  }

});
