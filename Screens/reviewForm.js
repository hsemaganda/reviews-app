import React from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from "yup";
import FlatButton from '../shared/button'

const reviewSchema = yup.object({
    title: yup.string()
            .required()
            .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'rating must be a number 1-5', (val)=>{
            return parseInt(val) < 6 && parseInt(val)> 0;
        })
})

export default function ReviewForm({addReview}){
    return(
        <View style={globalStyles.container}>
            <Formik 
            initialValues={{title: '', body: '', rating: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values, actions)=>{
                actions.resetForm(); //resets the form
                addReview(values);

            }}

            >
                {(formikprops)=>(
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='review title'
                            onChangeText={formikprops.handleChange('title')}
                            value={formikprops.values.title}
                            onBlur={formikprops.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{formikprops.touched.title && formikprops.errors.title}</Text>
                        <TextInput 
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='review body'
                            onChangeText={formikprops.handleChange('body')}
                            value={formikprops.values.body}
                            onBlur={formikprops.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{formikprops.touched.body && formikprops.errors.body}</Text>
                        <TextInput 
                            multiline
                            style={globalStyles.input}
                            placeholder='rating (1-4)'
                            onChangeText={formikprops.handleChange('rating')}
                            value={formikprops.values.rating}
                            onBlur={formikprops.handleBlur('rating')}
                            keyboardType= 'numeric'
                        />
                        <Text style={globalStyles.errorText}>{formikprops.touched.rating && formikprops.errors.rating}</Text>
                        <FlatButton text='Submit' onPress={formikprops.handleSubmit}/>
                        
                    </View>

                )}

            </Formik>
        </View>
    );
}
