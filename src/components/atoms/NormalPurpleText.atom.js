import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PURPLE } from "_styles/colors";
import { defaultMargin, padding } from "_styles/mixins";
import {
  defaultMediumSmallText,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_16,
  FONT_WEIGHT_REGULAR,
} from "_styles/typography";

/**
 *
 * @param {*} param0
 * @returns a custom button
 */
const NormalPurpleText = (props) => {
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
    ...padding(0, 0, 0, 5),
  },

  head3: {
    ...padding(3, 3, 3, 3),
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    ...defaultMediumSmallText(PURPLE),
    fontSize: FONT_SIZE_16,
    display: "flex",
    alignItems: "center",
  },
});

export default NormalPurpleText;
