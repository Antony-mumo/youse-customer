import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  WHITE } from '_styles/colors';
import { defaultMargin, defaultPadding, margin, padding } from '_styles/mixins';
import { FONT_FAMILY_BOLD,FONT_FAMILY_REGULAR,FONT_REGULAR,FONT_WEIGHT_EXTRA_BOLD, FONT_WEIGHT_REGULAR, MAX_WIDTH } from '_styles/typography';


/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const NormalTextWhite = ( props ) =>{
    const { text }  = props

     
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
    ...FONT_REGULAR,
    color: WHITE,
    display: "flex",
    alignItems: "center",
  },
  
})

export default NormalTextWhite