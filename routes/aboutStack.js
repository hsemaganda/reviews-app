import { createStackNavigator } from "react-navigation-stack";
import About from "../Screens/About";
import Header from "../shared/header";
import React from 'react'

const screens ={
    
    About: {
        screen: About,
        navigationOptions: ({navigation})=>{
            return {
                 //title: 'GameZone',
                 headerTitle: () => <Header navigation={navigation} title={'About gameZone'}/>,
                 headerStyle: {
                     backgroundColor: '#eee'
                 }
             }
         }
        }
}
const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: 'red', height: 60
    },
    headerTintColor: '#444'
}
});

//export default createAppContainer(HomeStack);
export default AboutStack;