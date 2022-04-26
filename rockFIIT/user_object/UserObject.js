import React, {useEffect, useState} from "react";

class User {
    constructor(username, programs, exercises, goals, exerciseList){
        this.username = username;
        this.programs = programs;
        this.exercises = exercises;
        this.goals = goals;
        this.exerciseList = exerciseList;
    }
};

let currentUserName = 'test';

let programListTest = [
    ['PPL Split', 'DB Bench', 'Barbell Squats', 'DB Shoulder Press'],
    ['Strength Program', 'Walking DB Lunges', 'Max Hangs', 'Pull Ups'],
    ['V4 Climb', 'Max Hangs', 'Lock Offs', 'Pull Ups', '4x4s'],
]

let exerciseListTest = [
    ['DB Bench', 5, 8, 'DB Bench Comment'],
    ['Barbell Squats', 4, 12, 'Barbell Squats Comment'],
    ['DB Shoulder Press', 4, 10, 'DB Shoulder Press Comment'],
    ['Walking Lunges', 5, 8, 'Walking Lunges Comment'],
]

let exerciseLibrary = [];

let exerciseLogTest = [
    [1, 'NewUser3@gmail.com', 0, 3, 10, 225.0, 'Easy Work', '4/5/22'],
    [2, 'NewUser3@gmail.com', 0, 3, 10, 230.0, 'Easy Work', '4/8/22'],
    [3, 'NewUser3@gmail.com', 0, 3, 10, 235.0, 'Easy Work', '4/9/22'],
    [4, 'NewUser3@gmail.com', 0, 3, 10, 240.0, 'Easy Work', '4/12/22'],
    [5, 'NewUser3@gmail.com', 0, 3, 10, 245.0, 'Easy Work', '4/13/22'],
    [6, 'NewUser3@gmail.com', 1, 3, 10, 245.0, 'Easy Work', '4/13/22'],
];


let goalListTest = [
    [1, 'NewUser3@gmail.com', 'Gain 15 LBS', 1],
    [2, 'NewUser3@gmail.com', 'Bench 225 LBS', 0],
    [3, 'NewUser3@gmail.com', 'Increase Squat By 10 LBS', 1],
    [4, 'Test@gmail.com', 'Lose 30 LBS', 0],
]

function setCurrentUser(user, programs, exercises){
    currentUser = new User(user, programs, exercises);
    return currentUser;
}

async function addNewUser(username, password, name){
    var possibleError = '';
    return new Promise((resolve) => {
        const newData = 
        {
            userName: username,
            password: password,
            firstName: name,
            weight: '',
        };
        fetch('http://192.168.1.192:5000/addUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json;',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        }).then(response => response.json().then(data => {
            possibleError = data.info;

        }))
        setTimeout(() => {
            console.log('requestMSG is ' + possibleError);
            if(possibleError == 'duplicate user'){
                resolve('false');
            }
            else{
                resolve('true');
            }
        }, 1000);
    })

}

async function userAuthenticate(username, password){
    var responseMsg = '';
    return new Promise((resolve) => {
        const userCredentials =
        {
            userName: username,
            password: password,
        }; 
        fetch('http://192.168.1.192:5000/activities', {
            method: 'POST',
            headers: {
                'Accept': 'application/json;',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        }).then(response => response.json().then(data => {
            responseMsg = data.info;
        }))
        
        setTimeout(() => {
            if (responseMsg == 'Successfully retrieved user activity logs'){
                resolve('true');
            }
            else{
                resolve('false');
            }
        }, 1000);
    })
}

async function getExerciseList(){
    var exerciseList = [];
    return new Promise((resolve) => {
        var exerciseList = []
        fetch('http://192.168.1.192:5000/exercises').then(response => response.json().then(data => {
            exerciseList = data.data;
          }))
          setTimeout(() => {
            resolve(exerciseList);
        }, 1000);
    })
}

async function getUserLogs(username,password){
    var userLogs = [];
    return new Promise((resolve) => {
        const userCredentials =
        {
            userName: username,
            password: password,
        }; 
        fetch('http://192.168.1.192:5000/activities', {
            method: 'POST',
            headers: {
                'Accept': 'application/json;',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        }).then(response => response.json().then(data => {
            userLogs = data.data;
        }))

        setTimeout(() => {
            resolve(userLogs);
        }, 1000);
    })
}

async function getUserPrograms(username,password){
    var programData = {};
    return new Promise((resolve) => {
        const userCredentials =
        {
            userName: username,
            password: password,
        }; 
        fetch('http://192.168.1.192:5000/programs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json;',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        }).then(response => response.json().then(data => {
            programData = data.data;
        }))
        /*      
        for(var i = 0, j = 0 ; i < programData.length ; i++){
            if(!userPrograms.includes(programData[i][2])){
                userPrograms[j][0] = programData[i][2];
                userPrograms[j][userPrograms[j].length] = programData[i][3];
                j++;
            }
            else{
                for(var k = 0; k < userPrograms.length ; k++){
                    if(userPrograms[k][0] == programData[i][2]){
                        userPrograms[k][userPrograms[k].length] = programData[i][3];
                    }
                }
            }
        }
        */
        setTimeout(() => {
            resolve(programData);
        }, 1000);
    })
}

async function getUserGoals(username,password){
    var userGoals = [];
    return new Promise((resolve) => {
        const userCredentials =
        {
            userName: username,
            password: password,
        }; 
        fetch('http://192.168.1.192:5000/goals', {
            method: 'POST',
            headers: {
                'Accept': 'application/json;',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        }).then(response => response.json().then(data => {
            userGoals = data.data;
        }))
        setTimeout(() => {
            resolve(userGoals);
        }, 1000);
    })
}

async function addUserGoals(username, password, goal, isCompleted){
    return new Promise(() => {
        const userCredentials =
        {
            userName: username,
            goalName : goal,
            completed: isCompleted,
            password: password,
        }; 
        fetch('http://192.168.1.192:5000/addGoal', {
            method: 'POST',
            headers: {
                'Accept': 'application/json;',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        }).then(response => response.json().then(data => {
            console.log(data.info);
        }))
    })
}

async function loadExerciseLibrary(){
    exerciseLibrary = await getExerciseList();
}
loadExerciseLibrary();

function getExerciseFromId(id){
    for(var i = 0; i < exerciseLibrary.length ; i++){
        if(id == exerciseLibrary[i][0]){
            return exerciseLibrary[i];
        }
    }
}

exerciseLibrary

export var UserObject = {
    addNewUser,
    userAuthenticate,
    getExerciseList,
    getUserLogs,
    getUserPrograms,
    getUserGoals,
    addUserGoals,
    setCurrentUser,
    getExerciseFromId,
    loadExerciseLibrary,
    User,
    programListTest,
    exerciseListTest,
    exerciseLogTest,
    goalListTest,
}