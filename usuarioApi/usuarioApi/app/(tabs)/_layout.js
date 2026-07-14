import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons"

export default function TabsLayout (){
    return (
        <Tabs>
            <Tabs.Screen name = "index" options = {{title: "Inicio", href:null,}}/>
            <Tabs.Screen name = "alta" options = {{title: "Alta Usuario", tabBarIcon: ({color, size}) => (
                <Ionicons name = "person-add" size={size} color = "green"/>
            )}}/>
            <Tabs.Screen name = "consulta" options = {{title: "Consulta Usuario", tabBarIcon: ({color, size}) => (
                <Ionicons name = "search" size={size} color = "green"/>
            )}}/>

        </Tabs>

    );
}



