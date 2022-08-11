import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { defaultMargin, defaultPadding } from '_styles/mixins';
import { FONT_FAMILY_BOLD,FONT_WEIGHT_EXTRA_BOLD, MAX_WIDTH } from '_styles/typography';


/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const BlueText = ( props ) =>{
    const { text, styling }  = props

    return(
        <>
        <View style={styles.container}>
            <Text style={[styles.head3, {...styling}]}>
                { props.text }
            </Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
   container: {
        ...defaultMargin(),
   },
   
   head3: {
    ...defaultPadding(),
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    maxWidth: MAX_WIDTH,
    display: "flex",
    alignItems: "center",
  },
  
})

export default BlueText;