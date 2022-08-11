import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '_styles';
import { TextInput } from "react-native-paper";

import ErrorTextAtom from "_components/atoms/ErrorText.atom";


/**
 * 
 * @param {*} param0 
 * pass styles as styling, if not passed default style defined below is used
 * pass 
 * @returns a text input object with handled
 */
const PasswordInputMole = ( props ) =>{
    const {
        field : {name, onBlur, onChange, value},
        form : {errors,touched, setFieldTouched},
        container : container ,
        ...inputProps
    } = props

    const hasError = errors[name] && touched[name]

    const [data, setdata] = React.useState({
        password: "",
        secureTextEntry: true,
        icon: "eye",
      });

    const updateSecureTextEntry = () => {
        setdata({
          ...data,
          secureTextEntry: data.secureTextEntry === true ? false : true,
          icon: data.icon === "eye" ? "eye-off" : "eye",
        });
      };
    
    return(
        <>
            <View style={[ 
                container && { ...container },
                {...styles.container}
            ]}>
                <TextInput
                    out
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
                    outlineColor="transparent"
                    activeOutlineColor={Colors.DEEP_BLUE}
                    secureTextEntry={data.secureTextEntry ? true : false}
                    right={
                    <TextInput.Icon
                        name={data.icon}
                        color={Colors.DEEP_BLUE}
                        onPress={updateSecureTextEntry}
                    />
                    }
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

export default PasswordInputMole