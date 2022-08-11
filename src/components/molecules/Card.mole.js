import React from "react";
import { StyleSheet, Image } from "react-native";
import { Colors } from "_styles";
import {  Card } from "react-native-paper";
import { border, defaultMargin } from "_styles/mixins";
import { WHITE } from "_styles/colors";
import SmallTextWhite from "_components/atoms/SmallWhiteText.atom";
import { FONT_SIZE_10, FONT_SIZE_8 } from "_styles/typography";

const CardsMole = (props) => {
  const { name, image, container: container, colour } = props.cardV;

  return (
    <>
      <Card style={[styles.cardContainer, { backgroundColor: colour }]}>
        <Card.Content style={styles.container}>
          <SmallTextWhite
          text = {name}
          styling={{fontSize: FONT_SIZE_8}}
          />
          {/* <Card.Cover style={styles.cover} source={image} /> */}
          <Image style={styles.cover} source={image} />
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    ...border(20,20,20,20,0, WHITE),
    ...defaultMargin(),
    flex: 1, alignItems: 'center', 
    height: 100,
    minWidth: 100
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

  titleColor: {
    color: Colors.WHITE,
  },
});

export default CardsMole;
