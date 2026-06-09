import { Text, Image, Button} from "react-native";
import { View } from "react-native-web";

export const Saludo2=()=>{
    return(
            <View>

                <Text> Hola RN: Componente Propio 3 elementos </Text>
                <Image source={require('../assets/wave.png')}/>
                <Button title = "Hola 204"></Button>

            </View>

    )
} 