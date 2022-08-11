import React from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView} from "react-native";
import { Colors } from "_styles";
import { __ } from "_utils/stringPicker";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import NormalTextBlue from "_components/atoms/NormalBlueText.atom";
import { padding } from "_styles/mixins";


const ProfileScreen_texts = {
  greetings2: "Profile Screen",
};

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} >
      <View style={{width:'100%', height: '100%'}}>
      <View style={{...padding(0,3,0,3)}}>
        <View style={styles.statusbar} />
        <StatusBar
                style="light"
                translucent={true}
                backgroundColor={Colors.PRIMARY}
              />
          <View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
              <TouchableOpacity>
                <Entypo name="menu" size={24} color={Colors.DEEP_BLUE} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            
            <NormalTextBlue
              text={ProfileScreen_texts.greetings2}
              />
          </View>
         
      </View>
        {/* scrollable pane */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          ...padding(3,5,3,5),
          height: "auto",
        }}
      >
       
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  statusbar: {
    height: StatusBar.currentHeight,
    backgroundColor: Colors.PRIMARY,
  },
  
});

export default ProfileScreen;
