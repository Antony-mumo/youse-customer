import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GRAY_DARK } from '_styles/colors';
import { defaultMargin, defaultPadding } from '_styles/mixins';
import { FONT_FAMILY_REGULAR,FONT_WEIGHT_REGULAR,FONT_WEIGHT_EXTRA_BOLD, MAX_WIDTH } from '_styles/typography';


/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const LightInactiveText = ( props ) =>{
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
        ...defaultMargin(),
   },
   
   head3: {
    // ...defaultPadding(),
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    maxWidth: MAX_WIDTH,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: GRAY_DARK,
  },
  
})

export default LightInactiveText;