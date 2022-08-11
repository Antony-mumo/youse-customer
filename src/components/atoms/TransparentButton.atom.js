import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.production.min';
import { Colors } from '_styles';
import { DEEP_BLUE, GRAY_MEDIUM, TRANSPARENT } from '_styles/colors';
import { border, defaultMargin } from '_styles/mixins';
import { FONT_FAMILY_SEMI_BOLD, FONT_SIZE_16 } from '_styles/typography';


/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const TransparentButtonAtom = ( props ) =>{
    
    const { text, active, data, styling, action }  = props

    const [buttonText, setText] = useState(text)

    

    return(
        <>
        <View style={[
          {...styling},
          styles.container
          ]}>
            <TouchableOpacity 
            style={[
                {...styles.button},
                styling && {...styling},
                active && styles.activeButton,
                !active && styles.inactiveButton
              ]} 
            // disabled = { !active }  
            onPress = { () => action(data) }>
                <Text style= {{...styles.btnText, color: active == true ? DEEP_BLUE : GRAY_MEDIUM }}>{ buttonText }</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
   container: {
        ...defaultMargin(),
   },
    
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  activeButton: {
    backgroundColor: TRANSPARENT,
    ...border(10,10,10,10,2,DEEP_BLUE),
    width:'100%'
  },
  inactiveButton: {
    backgroundColor: TRANSPARENT,
    ...border(10,10,10,10,2,GRAY_MEDIUM),
    width:'100%'
  },
  btnText: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_16,
    textAlign: 'center',
    color: GRAY_MEDIUM,
  },
})

export default TransparentButtonAtom