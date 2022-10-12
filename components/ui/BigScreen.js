import {Icon, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import {colors} from '../../constants/styles'
// import IconButton from "./IconButton";

export default function BigScreen({point, sensorReading, gpsCoordinate, addDatafunc}){
    return(
        <Layout style={styles.outest}>
            <Layout style={styles.outer}>
                <Layout style={styles.pointOuter}>
                    <Text category="h1" style={styles.pointValue}>{point}</Text>
                </Layout>
                <Layout style={{flexGrow: 1, backgroundColor: colors.dark,}}></Layout>
                <Layout styles={styles.valuesOuter}>
                    <Text style={styles.sensorValue}>{sensorReading}</Text>
                    <Text category="h5" style={styles.gpsValue}>{gpsCoordinate.lat},{gpsCoordinate.lng}</Text>
                </Layout>
            </Layout>
            <Layout style={{flexGrow: 1, backgroundColor: colors.lightBack, marginTop: '15%'}}>
                <Icon name='checkmark' style={{width: 64, height: 64, backgroundColor: 'pink'}} fill={colors.dark} onPress={addDatafunc}/>
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    outest:{width:'100%', backgroundColor: colors.lightBack, flexDirection: 'row'},
    outer: {flexDirection: 'row', justifyContent: 'space-between', width: '75%', marginHorizontal: '2%', marginVertical:'5%',
        backgroundColor: colors.dark, borderWidth: 2 },
    pointOuter: {flexGrow: 1, alignItem:'center',alignContent:'center', backgroundColor: colors.medium, paddingLeft: 10, height:'100%'},
    valuesOuter: {flexGrow: 5, alignItems:'center', backgroundColor: colors.dark,},
    gpsValue:{backgroundColor: colors.dark, color: colors.lightBack,},
    sensorValue:{backgroundColor: colors.dark, fontSize: 70, color: colors.lightBack,},
    pointValue:{backgroundColor: colors.medium, fontSize: 70, color: colors.lightBack,}

})