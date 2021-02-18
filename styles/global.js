import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
    },
    titleText:{
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph:{
        marginVertical: 8,
        lineHeight: 8

    }, 
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding:10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }

});
///Users/semaganda/Desktop/MyFiles/myreact_native/reviews-app/assets/rating-4.png
export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png')
        
    }
}

