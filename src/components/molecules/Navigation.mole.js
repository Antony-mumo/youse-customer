import React from 'react';
import { Button, View, TouchableOpacity, StyleSheet, TouchableOpacityeSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { border, boxShadow, defaultMargin, margin, padding } from '_styles/mixins';
import { DEEP_BLUE, GRAY_LIGHT, GRAY_MEDIUM, ORANGE, PRIMARY, WHITE } from '_styles/colors';
/**
 * 
 * @param {*} param0 
 * @returns a custom button
 */
const NavigationMenu = ( props ) =>{
    const { text }  = props

    var notify = true;

    return(
        <>
            <View
            style={styles.container}
            >
                <View style={styles.main}>
                    <View style={styles.section}>
                        <TouchableOpacity style={styles.button}>
                            <Entypo name="home" size={26} color={DEEP_BLUE} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <MaterialIcons name="history" size={26} color={DEEP_BLUE} />
                        </TouchableOpacity>
                        <View style={[styles.button, styles.refPosition]}>
                            <TouchableOpacity style={styles.floatButton}>
                                <Ionicons name="person-circle-outline" size={70} color={GRAY_LIGHT} />     
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{...styles.button,position: 'relative'}}>
                            {notify && <View style={styles.notification}></View>}
                            <MaterialIcons name="notifications-none" size={26} color={DEEP_BLUE} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Ionicons name="settings-outline" size={26} color={DEEP_BLUE} />
                        </TouchableOpacity>
                    </View>

                </View>
                        
            </View>
        </>
    )
}

const styles = StyleSheet.create({
   container: {
    width: '100%',
           ...boxShadow(GRAY_MEDIUM)
   },
   main:{
       ...margin(1,1,30,1),
       ...border(10,10,10,10,1,DEEP_BLUE),
       
   },
   section:{
    flexDirection: "row",
    justifyContent:'space-evenly'
   },
   button:{
       height: 50,
       justifyContent: 'center',
       ...padding(5,5,5,5),
       minWidth: 70,
       alignItems: 'center',
   },
   refPosition:{
       position: 'relative'
   },
   floatButton:{
       position: 'absolute',
       top: -40,
       backgroundColor: PRIMARY,
       height: 70,
       width:70,
       ...border(35,35,35,35,0,WHITE),
       alignItems: 'center',
       justifyContent:'center'
   },
   notification:{
    position: 'absolute',
    ...border(3,3,3,3,1,ORANGE),
    top: "37%",
    right: "37%",
    width: 6,
    height: 6,
    backgroundColor: ORANGE   
   }
  
})

export default NavigationMenu