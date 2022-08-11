import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { Colors } from '_styles';
import { WHITE } from '_styles/colors';
import { defaultText } from '_styles/typography';
import CustomText from './CustomText.atom';


/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const ButtonAtom = ( props ) =>{
    
    const { text, active, styling, action }  = props

    const [buttonText, setText] = useState(text)

    

    return(
        <>
        <View style={styles.container}>
            <TouchableOpacity 
            style={[
                {...styles.button},
                styling && {...styling},
                active && styles.activeButton,
                !active && styles.inactiveButton
              ]} 
            disabled = { !active }  
            onPress = { () => action() }>
              { !!text ? <CustomText
                styling={defaultText(WHITE, 'center')}>
                  {buttonText}
              </CustomText> : props.children}
            </TouchableOpacity>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
   container: {
        marginTop:5,
        marginBottom: 5
   },
   
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 10,
  },
  activeButton: {
    backgroundColor: Colors.DEEP_BLUE,
  },
  inactiveButton: {
    backgroundColor: Colors.GRAY_MEDIUM,
  },
  btnText: {
    fontSize: 20,
    color: Colors.WHITE,
  },
})

export default ButtonAtom