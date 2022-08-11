import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DEEP_BLUE } from "_styles/colors";
import { defaultMargin, margin, padding } from "_styles/mixins";
import {
  defaultMediumLargeText,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_20,
  FONT_WEIGHT_REGULAR,
  smallBoldText,
} from "_styles/typography";

/**
 *
 * @param {*} param0
 * @returns a custom button
 */
const NormalBlackText = (props) => {
  const { text } = props;

  console.log({ ...defaultMargin() });
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.head3}>{props.text}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...margin(1, 5, 1, 5),
  },

  head3: {
    ...padding(3, 5, 3, 5),
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    ...smallBoldText(DEEP_BLUE),
    fontSize: FONT_SIZE_20,
    color: DEEP_BLUE,
    display: "flex",
    alignItems: "center",
  },
});
1;
1;

export default NormalBlackText;
