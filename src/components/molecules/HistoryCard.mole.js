import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "_styles";
import { defaultMargin } from "_styles/mixins";
import { BLACK, GRAY_LIGHT } from "_styles/colors";
import { TouchableOpacity } from "react-native-gesture-handler";


import NormalBlackText from "_components/atoms/NormalBlackText.atom";
import OrangeText from "_components/atoms/OrangeText.atom";
import LightOrangeText from "_components/atoms/LightOrangeText.atom";
import NormalPurpleText from "_components/atoms/NormalPurpleText.atom";


const HistoryCardMole_texts = {
    title: "Mechanic",
    since: "since 8:38am",
    price: "kes 500",
    status_in_progress: "In Progress",
    cancel: "Cancel"
};
<<<<<<< HEAD
const CancelledPopupMole_texts = {
  CANNOT_BE_UNDONE: "CANNOT BE UNDONE!",
  YOU_ARE_ABOUT: "You are about to cancle an order, remember",
  THIS_CONSEQUENCE: "that this consequence will meet you if you",
  PROCEED: "proceed. Once done, action cannot be",
  UNDONE: "undone."
};
=======

>>>>>>> origin/v1-main
const HistoryCardMole = () => {
 

  return (

      <View style={[styles.cardContainer, { backgroundColor: Colors.WHITE }]}>
        <View style={{}}>
           <View>
            <NormalBlackText text={HistoryCardMole_texts.title}/> 
            </View>
          <View style={styles.priceTIme}>
            <LightOrangeText text={HistoryCardMole_texts.since}/> 
            <NormalBlackText text={HistoryCardMole_texts.price}/> 
          </View>
        </View>
     
          <View style={styles.bottomCardWrapper}>
            <NormalPurpleText text={HistoryCardMole_texts.status_in_progress}/> 
            <TouchableOpacity >
                <OrangeText text={HistoryCardMole_texts.cancel}/> 
            </TouchableOpacity>
          </View>

          {/* <View style={styles.wrapModal}>
              <OrangeText text={CancelledPopupMole_texts.CANNOT_BE_UNDONE}></OrangeText>
              <NormalBlackText text={CancelledPopupMole_texts.THIS_CONSEQUENCE}></NormalBlackText>
              <NormalBlackText text={CancelledPopupMole_texts.PROCEED}></NormalBlackText>
              <NormalBlackText text={CancelledPopupMole_texts.UNDONE}></NormalBlackText>

          </View> */}

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
<<<<<<< HEAD
    // height: 120,
=======
>>>>>>> origin/v1-main
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
  containerC: {
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

export default HistoryCardMole;
