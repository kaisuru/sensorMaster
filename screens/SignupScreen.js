import { Layout, Text } from "@ui-kitten/components";
import {colors} from '../constants/styles'

export default function SignupScreen(){
    return(
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.lightBack}}>
            <Text category='h1'>Signup Screen</Text>
        </Layout>
    )
}