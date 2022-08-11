import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '_styles';
import { ORANGE } from '_styles/colors';
import { defaultSmallText } from '_styles/typography';
import CustomText from './CustomText.atom';


/**
 * 
 * @param {*} param0 
 * pass styles as styling, if not passed default style defined below is used
 * pass 
 * @returns a text input object with handled
 */
const ErrorTextAtom = ( props ) =>{
     const { error, ...otherProps} = props
    const hasError = !!error

    return(
        <>
        <View style={styles.container}>
           {hasError && <CustomText
           styling={{
               ...defaultSmallText(ORANGE,'center'),
                ...otherProps.styling
            }}
           >{ error }</CustomText>}
        </View>
        </>
    )
}


const styles = StyleSheet.create({
   container: {
      
   },
    errorText: {
    }

})

export default ErrorTextAtom