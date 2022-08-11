import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  WHITE } from '_styles/colors';
import { defaultMargin, margin, padding } from '_styles/mixins';
import { FONT_FAMILY_REGULAR,FONT_SIZE_10,FONT_WEIGHT_REGULAR } from '_styles/typography';


/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const SmallTextWhite = ( props ) =>{
    const { text, styling }  = props

     
    return(
        <>
        <View style={styles.container}>
            <Text style={[styles.head3, styling]}>
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
    fontSize: FONT_SIZE_10,
    color: WHITE,
    display: "flex",
    alignItems: "center",
  },
  
})

export default SmallTextWhite