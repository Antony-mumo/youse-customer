import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LightOrange } from "_styles/colors";
import { defaultMargin, defaultPadding, padding } from "_styles/mixins";
import {
  defaultMediumSmallText,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_16,
  FONT_WEIGHT_REGULAR,
  MAX_WIDTH,
} from "_styles/typography";

/**
 *
 * @param {*} param0
 * @returns a custom button
 */
const LightOrangeText = (props) => {
  const { text, styling } = props;

  console.log({ ...defaultMargin() });
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
    ...padding(0, 0, 0, 5),
  },

  head3: {
    ...defaultPadding(),
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    ...defaultMediumSmallText(LightOrange),
    fontSize: FONT_SIZE_16,
    maxWidth: MAX_WIDTH,
    display: "flex",
    alignItems: "center",
  },
});

export default LightOrangeText;
