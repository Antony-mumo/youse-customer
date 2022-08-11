import React from "react";
import { StyleSheet, Image,View,Text } from "react-native";
import { Colors } from "_styles";
import { border, defaultMargin } from "_styles/mixins";
import { WHITE, BLACK, GRAY_LIGHT } from "_styles/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons'; 


import NormalInactiveGrey from "_components/atoms/NormalInactiveGrey.atom";
import OrangeText from "_components/atoms/OrangeText.atom";
import LightOrangeText from "_components/atoms/LightOrangeText.atom";

const HistoryCardMole_texts = {
    title: "Mechanic",
    since: "since 8:38am",
    price: "kes 500",
    status_Cancelled: "cancelled",
    cancel: ">>>"
};
const HistoryCardCancelledMole = () => {
 

  return (

      <View style={[styles.cardContainer, { backgroundColor: Colors.WHITE }]}>
        <View style={{}}>
            <NormalInactiveGrey text={HistoryCardMole_texts.title}/> 
          <View style={styles.priceTIme}>
            <NormalInactiveGrey text={HistoryCardMole_texts.since}/> 
            <NormalInactiveGrey text={HistoryCardMole_texts.price}/> 
          </View>
        </View>
          <View style={styles.bottomCardWrapper}>
          <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <MaterialIcons name="cancel-presentation" size={24} color="#e6e6e6"/>
            <NormalInactiveGrey text={HistoryCardMole_texts.status_Cancelled}/> 
          </View> 
            <TouchableOpacity >
                <NormalInactiveGrey text={HistoryCardMole_texts.cancel}/> 
            </TouchableOpacity>
          </View>

      </View>

  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // ...border(20,20,20,20,0, BLACK),
    ...defaultMargin(),
    // borderWidth: 0.1,
    borderRadius:10,
    //  shadowColor: Colors.BLACK,
    width: "90%",
    flex: 1, 
    alignSelf: "center",
    // height: 60,
    minWidth: 100,
    height: 120,
    shadowColor: BLACK,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: 20,
    shadowColor: BLACK,
 
   
      
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cover: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  priceTIme: {
    justifyContent: "space-between",
    
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      marginTop: 0
    

  },
  bottomCardWrapper: {
    marginTop: 15,
    justifyContent: "space-between",
    borderTopWidth: 4,
    borderTopColor: GRAY_LIGHT,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
   
  }


});

export default HistoryCardCancelledMole;