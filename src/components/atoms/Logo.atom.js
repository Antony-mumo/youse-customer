import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.production.min';
import { Colors } from '_styles';
import Logo from '_assets/logo.svg';
 


/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const LogoAtom = ( props ) =>{
    
    const { text, active, styling, action }  = props


    

    return(
        <View style={{...styles.container,...styling}}>
            <Logo/>
        </View>
    )
}


const styles = StyleSheet.create({
   container: {
        
        marginTop: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      
        
        height: 90

   },

})

export default LogoAtom;