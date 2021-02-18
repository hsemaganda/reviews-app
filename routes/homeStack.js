import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import Home from '../Screens/Home'
import ReviewDetails from "../Screens/reviewDetails";
import Header from '../shared/header';
import React from 'react';


const screens ={
    
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=>{
           return {
                //title: 'GameZone',
                headerTitle: () => <Header navigation={navigation} title={'GameZone'}/>,
                headerStyle: {
                    backgroundColor: '#eee'
                }
            }
        }
    },
    ReviewDetails: {
        navigationOptions:{
            title: 'review details',
            headerStyle: {
                backgroundColor: '#eee'
            }
        },
        screen: ReviewDetails
    }
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: 'red', height: 60
    },
    headerTintColor: '#444'
}
});

//export default createAppContainer(HomeStack);

export default HomeStack;