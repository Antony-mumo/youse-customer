import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.production.min';
import { Colors } from '_styles';
import Logo from '_assets/logo.svg';
import { elevationShadowStyle, margin, row } from '_styles/mixins';
 


/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const CustomFloatingContent = ( props ) =>{
    
    const { ...otherprops }  = props

    return(
        <View style={styles.container}>
            <View style={styles.floatingContainer}>
                {props.children}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
   container: {
       position : 'relative',
       width: '100%',
   },
   floatingContainer: {
        position : 'absolute',
        left: 20,
        ...row('flex-start')
},

})

export default CustomFloatingContent;