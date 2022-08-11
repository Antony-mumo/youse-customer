import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Colors } from '_styles';
import { TextInput } from "react-native-paper";

import ErrorTextAtom from "_components/atoms/ErrorText.atom";
import { defaultText, FONT_FAMILY_REGULAR, FONT_REGULAR, FONT_SIZE_16, FONT_WEIGHT_REGULAR } from '_styles/typography';
import { DEEP_BLUE } from '_styles/colors';

/**
 * 
 * @param {*} param0 
 * pass styles, if not passed default style is used
 * pass placeholder
 * pass 
 * @returns a text input object with handled
 */
const TextInputMole = ( props ) =>{
    const {
        field : {name, onBlur, onChange, value},
        form : {errors,touched, setFieldTouched},
        container : container ,
        ...inputProps
    } = props

    const hasError = errors[name] && touched[name]

    return(
        <>
            <View style={[ 
                container && { ...container },
                {...styles.container}
            ]}>
            <TextInput
                style={[ 
                    {...styles.inputField},
                    inputProps.styling && {...inputProps.styling} , 
                    hasError && styles.errorInput
                ]}
                value={value}
                onChangeText={(text) => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name)
                    onBlur(name)
                }}
                theme={{ roundness: 10 }}
                color="white"
                mode="outlined"
                borderTopStartRadius={20}
                outlineColor="transparent"
                activeOutlineColor={Colors.DEEP_BLUE}
                {...inputProps}
            />
            <ErrorTextAtom error = {touched[name] && errors[name]}/>
        </View>
    </>
    )
} 

const styles = StyleSheet.create({
    container:{
        
    },
    inputField: {
        backgroundColor: Colors.GRAY,
        height: 50,
        width: "80%",
        maxWidth: 500,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        marginEnd: 10,
    },

    errorInput: {

    },

    errorText: {
        marginStart:40,
        color:Colors.ORANGE
    }

})

export default TextInputMole