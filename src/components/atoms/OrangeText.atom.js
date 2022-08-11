import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ORANGE } from "_styles/colors";
import { defaultPadding, padding } from "_styles/mixins";
import {
  extraBoldText,
  FONT_FAMILY_BOLD,
  FONT_SIZE_20,
  FONT_WEIGHT_EXTRA_BOLD,
  MAX_WIDTH,
} from "_styles/typography";

/**
 *
 * @param {*} param0
 * @returns a custom button
 */
const OrangeText = (props) => {
  const { text, styling } = props;

  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.head3, styling]}>{props.text}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding(0, 8, 0, 0),
  },

  head3: {
    ...defaultPadding(),
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    ...extraBoldText(ORANGE),
    fontSize: FONT_SIZE_20,
    maxWidth: MAX_WIDTH,
    display: "flex",
    alignItems: "center",
  },
});

export default OrangeText;
