import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DEEP_BLUE } from "_styles/colors";
import { defaultPadding } from "_styles/mixins";
import {
  FONT_FAMILY_BOLD,
  FONT_SIZE_24,
  FONT_SIZE_32,
  FONT_SIZE_40,
  FONT_WEIGHT_EXTRA_BOLD,
  MAX_WIDTH,
} from "_styles/typography";

/**
 *
 * @param {*} param0
 * @returns a custom button
 */
const BlueHeadThreeText = (props) => {
  const { text } = props;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.head3}>{props.text}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},

  head3: {
    ...defaultPadding(),
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    maxWidth: MAX_WIDTH,
    fontSize: FONT_SIZE_32,
    color: DEEP_BLUE,
    display: "flex",
    alignItems: "flex-start",
  },
});

export default BlueHeadThreeText;
