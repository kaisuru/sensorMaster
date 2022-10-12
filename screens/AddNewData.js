import { Layout, Text } from "@ui-kitten/components";
import { useLayoutEffect } from "react";
import { Alert } from "react-native";
import BigScreen from "../components/ui/BigScreen";


export default function AddNewData({route, navigation}){
    // check whether user want a new dataset or adding data to an existing location
    // const locationId = route.params?.locationId;
    // const isExistingLocation = !!locationId;

    const projectName = route.params.projectName;

    useLayoutEffect(()=>{
        navigation.setOptions({
            //title: !isExistingLocation ? "Add Data" : "Add Data at somewhere",
            title: `Project : ${projectName}`
        })
    },[navigation, projectName])

    function addDatafunc(){
        Alert.alert("Alert","Please add a name for the project",[{text: "OK", onPress: () => {return;}}])
    }

    return(
        <Layout>
            <BigScreen point={1} sensorReading={4.567} gpsCoordinate={{lat: 23.5673, lng: 45.8971}} addDatafunc={addDatafunc}/>
        </Layout>
    )
}