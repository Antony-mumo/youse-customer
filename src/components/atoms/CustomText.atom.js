import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { DEEP_BLUE } from '_styles/colors';
import { defaultText } from '_styles/typography';


/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const CustomText = ( props ) =>{
    const { text, styling, ...remainingProps }  = props

     
    return(
        <>
        <Text style={[styles.textSytle, {...styling}]} {...remainingProps}>
            { !!props.text ? props.text : props.children }
        </Text>
        </>
    )
}

const styles = StyleSheet.create({
   textSytle: {
       ...defaultText(DEEP_BLUE,'center')
  },
  
})

export default CustomText