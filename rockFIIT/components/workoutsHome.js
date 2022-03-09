import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import styled from "styled-components";


const WorkoutScroll = ({workoutData}) => {
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
        <ListContainer>
            <View>
          <TextItem> Workout: Dead hangs, pull ups, circuits</TextItem>
            </View>
        </ListContainer>
        <ListContainer>
            <View>
          <TextItem> Workout: Front squats, deadlifts, box jumps</TextItem>
            </View>
        </ListContainer>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex:0.4,
        backgroundColor: '#25374bcd',
        padding:30
    },
    image: {
        width: 150,
        height: 150
    },
    itemContainer: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#00000033',
        borderRadius:10,
        borderColor:"#eee",
        borderWidth:1,
        padding: 20,
        marginLeft: 10
    }, 
    day: {
        fontSize: 20,
        color:"black",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15
    },
    
    otherContainer: {
        paddingRight: 40
    }
})

const TextItem = styled.Text`
  color: black;
  width: 270px;
  height: auto;
  font-size: 20px;
  margin-right: 5px;
  margin-left: 10px;
  justify-content: center;
  margin-top: 12px;
`;

const ListContainer = styled.TouchableOpacity`
  background-color: rgb(255,255,255);
  height: 100px;
  width: 300px;
  border-radius: 15px;
  flex-direction: row;
  padding: 10px;
  margin-right: 10px;
`;


export default WorkoutScroll
