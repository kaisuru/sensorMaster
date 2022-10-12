import { Layout, Input, Button, Text} from "@ui-kitten/components";
import { StyleSheet, Alert} from 'react-native';
import {colors} from '../constants/styles'
import { useState} from "react";

export default function UsersScreen({navigation}){
    const [newProjectName, setNewProjectName] = useState();

    function inputNameHandler(enteredText){
        setNewProjectName(enteredText);
    }

    function selectExistingProject(){
        navigation.navigate('SelectExisting');
    }

    function selectNewProject(){
        if(!!newProjectName){
            navigation.navigate('AddNewData', {projectName: newProjectName});
        } else{
            Alert.alert("Alert","Please add a name for the project",[{text: "OK", onPress: () => {return;}}])
        }
    }

    return(
        <Layout style={styles.screenContainer}>
            <Layout style={styles.buttonContainer}>
                <Button style={styles.button} appearance='filled' onPress={selectExistingProject}> Select an Existing Project </Button>
            </Layout>
            <Layout style={styles.inputContainer}>
                <Input style={styles.input} value={newProjectName} label='Project Name' placeholder='New Project Name' onChangeText={inputNameHandler}/>
                <Button style={styles.button} appearance='filled' onPress={selectNewProject}> Start a new project </Button>
            </Layout>
        </Layout>
    )
}


const styles = StyleSheet.create({
    screenContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.lightBack,    
    },
    buttonContainer:{
        backgroundColor: colors.lightBack, borderBottomColor: 'lightgrey', borderBottomWidth: 2, justifyContent: 'center',
        alignItems: "center", height: '40%', width: '80%'
    },
    inputContainer: { 
        justifyContent: 'center',  backgroundColor: colors.lightBack,
        alignItems: "center", height: '40%', width: '80%'
    },
    input:{
        backgroundColor: 'white',
        marginBottom: 25
    }
})