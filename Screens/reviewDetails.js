import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Image } from "react-native";
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';


export default function ReviewDetails({navigation}){

    const rating = navigation.getParam('rating');

    const pressHandler =()=>{
        navigation.goBack();
    }
    return(
        <View style={globalStyles.container}>
            
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating]}/>
                    
                </View>
            </Card>

            <Button onPress={pressHandler}title='back to home screen'/>

        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 16,
        borderTopColor: '#eee'

    }
})
