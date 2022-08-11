import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  LIGHTGREEN } from '_styles/colors';
import { defaultMargin, defaultPadding, margin, padding } from '_styles/mixins';
import { FONT_FAMILY_BOLD,FONT_FAMILY_REGULAR,FONT_WEIGHT_EXTRA_BOLD, FONT_WEIGHT_REGULAR, MAX_WIDTH } from '_styles/typography';


/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const NormalGreenText = ( props ) =>{
    const { text }  = props

    console.log({...defaultMargin()})
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.head3}>
                { props.text }
            </Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
   container: {
        ...margin(1,1,1,1),
   },
   
   head3: {
    ...padding(3,3,3,3),
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    color: LIGHTGREEN,
    display: "flex",
    alignItems: "center",
  },
  
})

export default NormalGreenText;