import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import  RootDrawerNavigator  from "./routes/drawer";
///Users/semaganda/Desktop/MyFiles/myreact_native/reviews-app/routes/homeStack.js

const getFonts =()=>{
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-SemiBold.ttf')

  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  //if(fontsLoaded){
    return (   
      <RootDrawerNavigator/>
      
    );

  /*}else{
    return (
    <AppLoading
    startAsync={getFonts}
    onFinish={()=> setFontsLoaded(true)} 
    />
    );

  }*/
  
}

