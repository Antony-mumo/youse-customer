import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "_styles";
import {  Card } from "react-native-paper";
import { border, defaultMargin, padding } from "_styles/mixins";
import { DEEP_BLUE, WHITE } from "_styles/colors";
import SmallTextWhite from "_components/atoms/SmallWhiteText.atom";
import { FONT_SIZE_10, FONT_SIZE_12, FONT_SIZE_8, FONT_WEIGHT_BOLD, FONT_WEIGHT_REGULAR } from "_styles/typography";

const JobItemMole = (props) => {
  const { data, action } = props.cardV;

  return (
    <>
      <Card style={[styles.cardContainer, { backgroundColor: DEEP_BLUE }]}>
        <Card.Content style={styles.container}>
          <TouchableOpacity style={{width: '100%', height:'100%',  flex: 1,justifyContent: 'flex-end'}} onPress={()=>action(data)}>
          <SmallTextWhite
          text = {data.name}
          styling={{fontSize: FONT_SIZE_12,fontWeight:FONT_WEIGHT_REGULAR}}
          />
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    ...border(20,20,20,20,0, WHITE),
    ...defaultMargin(),
    ...padding(0,0,0,0),
    flex: 1, alignItems: 'center', 
    // height: 50,
  },
  container: {
    ...padding(10,10,10,10),
    flex: 1,justifyContent: 'flex-end'
      },
  cover: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  titleColor: {
    color: Colors.WHITE,
  },
});

export default JobItemMole;
